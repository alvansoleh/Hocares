import { CApiPlaces, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecasePlaceRoom } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecasePlaceRoom = () => {

    const { 
        showMessageError, 
        showMessageSuccess,
        showMessageWarning
    } = VComponentToast();
    const {
        buildingId,
        floorId,
        roomId,
        roomList,
        roomDetail,
        formRoomDetail,
        formFilter,
        isLoadingRoom,
        setBuildingId,
        setFloorId,
        setRoomId,
        setIsLoadingRoom,
        setRoomList,
        setRoomDetail,
        setFormRoomDetail,
        setFormFilter
    } = LUsecasePlaceRoom();
    const {
        getFloorRoomListReq,
        getFloorRoomListAllReq,
        getRoomDetailReq,
        newRoomReq,
        updateRoomReq,
        deleteRoomReq,
    } = CApiPlaces();

    const { buildingId: id, floorId: id2, roomId: id3 } = useParams();

    const {} = CUtilityLoad(() => {
        setFormFilter({
            page: 0,
            size: 10,
            filter_by: "",
            sort_by: "",
            query: "",
            is_apply: true
        });

        if (id !== undefined && id !== "-1") {
            setBuildingId(Number(id));
        }
        if (id2 !== undefined && id2 !== "-1") {
            setFloorId(Number(id2));
        }
        if (id3 !== undefined && id3 !== "-1") {
            setRoomId(Number(id3));
        } else {
            if (id2 !== undefined && id2 !== "-1") {
                setFormRoomDetail({
                    lantai_id: Number(id2),
                    nama_ruangan: "",
                })
            }
        }
    })

    const loadRoomList = () => {
        if (formFilter !== undefined && floorId !== undefined) {
            setIsLoadingRoom(true);
            getFloorRoomListReq(floorId, formFilter, (res) => {
                if (res.status) {
                    setRoomList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    const loadRoomListAll = () => {
        if (formFilter !== undefined) {
            setIsLoadingRoom(true);
            getFloorRoomListAllReq(formFilter, (res) => {
                if (res.status) {
                    setRoomList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    const loadRoomDetail = () => {
        if (buildingId !== undefined && floorId !== undefined && roomId !== undefined) {
            setIsLoadingRoom(true);
            getRoomDetailReq(roomId, (res) => {
                if (res.status) {
                    setRoomDetail(res.data);
                    setFormRoomDetail({
                        lantai_id: res.data.id_lantai,
                        nama_ruangan: res.data.nama_ruangan
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    const doNewRoom = () => {
        if (buildingId !== undefined && floorId !== undefined && roomId === undefined && formRoomDetail !== undefined) {
            setIsLoadingRoom(true);
            newRoomReq(formRoomDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    const doUpdateRoom = () => {
        if (buildingId !== undefined && floorId !== undefined && roomId !== undefined && formRoomDetail !== undefined) {
            setIsLoadingRoom(true);
            updateRoomReq(roomId, formRoomDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    const doFormRoom = () => {
        if (roomId === undefined) {
            doNewRoom();
        } else {
            doUpdateRoom();
        }
    }

    const doDeleteRoom = () => {
        if (roomDetail !== undefined) {
            setIsLoadingRoom(true);
            deleteRoomReq(roomDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingRoom(false);
                });
            });
        }
    }

    return {
        buildingId,
        floorId,
        roomId,
        isLoadingRoom,

        roomList,
        roomDetail,
        formRoomDetail,
        formFilter,

        loadRoomList,
        loadRoomListAll,
        loadRoomDetail,
        doFormRoom,
        doDeleteRoom,

        setBuildingId,
        setFloorId,
        setRoomDetail,
        setFormFilter,
        setFormRoomDetail,

        showMessageWarning
    }
}

export default CUsecasePlaceRoom