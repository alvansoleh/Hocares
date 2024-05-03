import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceFloor, CUsecasePlaceRoom, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceRoomBody, VPageDashboardPlaceRoomDelete, VPageDashboardPlaceRoomFilter, VPageDashboardPlaceRoomHead } from "./places";

const VPageDashboardPlaceRoom: React.FC = (): JSX.Element => {

    const {
        buildingId,
        floorId,
        roomList,
        roomDetail,
        formFilter,
        isLoadingRoom,
        setRoomDetail,
        setFormFilter,
        loadRoomList,
        doDeleteRoom
    } = CUsecasePlaceRoom();

    const {
        floorDetail,
        loadFloorDetail
    } = CUsecasePlaceFloor();

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
                loadRoomList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    useEffect(() => {
        if (floorId !== undefined && floorDetail === undefined) {
            loadFloorDetail();
        }
    }, [floorId])

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
        title={`${CUtilityString.title.dashboard.places.room.list.replace(` - ${CUtilityString.title.app}`, "")} - ${floorDetail?.nama_lantai}`}
        is_show_back={true}
        at={2}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingRoom ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.room.title}
           description={CUtilityString.table.places.room.description}
           search={{
                placeholder: CUtilityString.table.places.room.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.places.room.new,
                onClick: () => {
                    if (buildingId !== undefined && floorId !== undefined) {
                        if (!checkAccess("3", "tambah", userAccessByToken)) {
                            setIsNotAccessBack(false);
                            onOpenAccessOpen();
                        } else {
                            CUtilityRouterFunc.to(
                                CUtilityString.path.dashboard.places.room.form.replace(":buildingId", buildingId.toString()).replace(":floorId", floorId.toString()).replace(":roomId", "-1")
                            );
                        }
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (roomList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceRoomHead />)}
           body={(<VPageDashboardPlaceRoomBody
                items={roomList || []}
                onEdit={(item) => {
                    if (buildingId !== undefined && floorId !== undefined) {
                        if (!checkAccess("3", "ubah", userAccessByToken)) {
                            setIsNotAccessBack(false);
                            onOpenAccessOpen();
                        } else {
                            CUtilityRouterFunc.to(
                                CUtilityString.path.dashboard.places.room.form.replace(":buildingId", buildingId.toString()).replace(":floorId", floorId.toString()).replace(":roomId", item.id.toString())
                            );
                        }
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("3", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setRoomDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardPlaceRoomDelete
            isOpen={isOpenDelete}
            loading={isLoadingRoom}
            value={roomDetail}
            onDelete={doDeleteRoom}
            onClose={onCloseDelete} />
        <VPageDashboardPlaceRoomFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingRoom}
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

export default VPageDashboardPlaceRoom