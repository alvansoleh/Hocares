import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceBuilding, CUsecasePlaceFloor, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceFloorBody, VPageDashboardPlaceFloorDelete, VPageDashboardPlaceFloorFilter, VPageDashboardPlaceFloorHead } from "./places";

const VPageDashboardPlaceFloor: React.FC = (): JSX.Element => {

    const {
        buildingId,
        floorList,
        floorDetail,
        formFilter,
        isLoadingFloor,
        setFormFilter,
        setFloorDetail,
        loadFloorList,
        doDeleteFloor
    } = CUsecasePlaceFloor();

    const {
        buildingDetail,
        loadBuildingDetail
    } = CUsecasePlaceBuilding();

    const { 
        isOpen: isOpenDelete, 
        onClose: onCloseDelete, 
        onOpen: onOpenDelete 
    } = useDisclosure();

    const { 
        isOpen: isOpenFilter, 
        onClose: onCloseFilter, 
        onOpen: onOpenFilter 
    } = useDisclosure();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadFloorList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    useEffect(() => {
        if (buildingId !== undefined && buildingDetail === undefined) {
            loadBuildingDetail();
        }
    }, [buildingId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("3", "lihat", userAccessByToken)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={`${CUtilityString.title.dashboard.places.floor.list.replace(` - ${CUtilityString.title.app}`, "")} - ${buildingDetail?.nama_gedung}`}
        is_show_back={true}
        at={2}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingFloor ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.floor.title}
           description={CUtilityString.table.places.floor.description}
           search={{
                placeholder: CUtilityString.table.places.floor.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.places.floor.new,
                onClick: () => {
                    if (buildingId !== undefined) {
                        if (!checkAccess("3", "tambah", userAccessByToken)) {
                            setIsNotAccessBack(false);
                            onOpenAccessOpen();
                        } else {
                            CUtilityRouterFunc.to(
                                CUtilityString.path.dashboard.places.floor.form.replace(":buildingId", buildingId.toString()).replace(":floorId", "-1")
                            );
                        }
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (floorList?.length || 0) === 10 ? () => {
                    setFormFilter({
                        ...formFilter,
                        page: formFilter.page + 1,
                        is_apply: true
                    });
                } : undefined,
                prev: formFilter !== undefined && formFilter.page > 0 ? () => {
                    setFormFilter({
                        ...formFilter,
                        page: formFilter.page - 1,
                        is_apply: true
                    });
                } : undefined
            }}
           header={(<VPageDashboardPlaceFloorHead />)}
           body={(<VPageDashboardPlaceFloorBody
                items={floorList || []}
                onView={(item) => {
                    if (buildingId !== undefined) {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.places.room.list.replace(":buildingId", buildingId.toString()).replace(":floorId", item.id.toString())
                        );
                    }
                }} 
                onEdit={(item) => {
                    if (buildingId !== undefined) {
                        if (!checkAccess("3", "ubah", userAccessByToken)) {
                            setIsNotAccessBack(false);
                            onOpenAccessOpen();
                        } else {
                            CUtilityRouterFunc.to(
                                CUtilityString.path.dashboard.places.floor.form.replace(":buildingId", buildingId.toString()).replace(":floorId", item.id.toString())
                            );
                        }
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("3", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setFloorDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardPlaceFloorDelete
            isOpen={isOpenDelete}
            loading={isLoadingFloor}
            value={floorDetail}
            onDelete={doDeleteFloor}
            onClose={onCloseDelete} />
        <VPageDashboardPlaceFloorFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingFloor}
            value={formFilter}
            onApply={setFormFilter} />

        <VComponentModal
            isOpen={isAccessOpen}
            size="sm"
            title="Butuh Akses"
            content={(<Text>Maaf anda tidak memilik akses untuk fitur pada menu ini.</Text>)}
            onClose={() => {
                if (!notAccessBack) {
                    onCloseAccessOpen();
                } else CUtilityRouterFunc.back();
            }} />
    </VComponentLayoutDashboard>)
}

export default VPageDashboardPlaceFloor