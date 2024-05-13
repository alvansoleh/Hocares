import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceBuilding, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceBuildingBody, VPageDashboardPlaceBuildingDelete, VPageDashboardPlaceBuildingFilter, VPageDashboardPlaceBuildingHead } from "./places";

const VPageDashboardPlaceBuilding: React.FC = (): JSX.Element => {

    const {
        buildingList,
        buildingDetail,
        formFilter,
        isLoadingBuilding,
        setFormFilter,
        setBuildingDetail,
        loadBuildingList,
        doDeleteBuilding
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
                loadBuildingList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

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
        title={CUtilityString.title.dashboard.places.building.list.replace(` - ${CUtilityString.title.app}`, "")}
        at={2}>
        { isLoadingBuilding ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.building.title}
           description={CUtilityString.table.places.building.description}
           search={{
                placeholder: CUtilityString.table.places.building.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.places.building.new,
                onClick: () => {
                    if (!checkAccess("3", "tambah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.places.building.form.replace(":buildingId", "-1")
                        );
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (buildingList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceBuildingHead />)}
           body={(<VPageDashboardPlaceBuildingBody
                items={buildingList || []}
                onView={(item) => {
                    CUtilityRouterFunc.to(
                        CUtilityString.path.dashboard.places.floor.list.replace(":buildingId", item.id.toString())
                    );
                }} 
                onEdit={(item) => {
                    if (!checkAccess("3", "ubah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.places.building.form.replace(":buildingId", item.id.toString())
                        );
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("3", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setBuildingDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardPlaceBuildingDelete
            isOpen={isOpenDelete}
            loading={isLoadingBuilding}
            value={buildingDetail}
            onDelete={doDeleteBuilding}
            onClose={onCloseDelete} />
        <VPageDashboardPlaceBuildingFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingBuilding}
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

export default VPageDashboardPlaceBuilding