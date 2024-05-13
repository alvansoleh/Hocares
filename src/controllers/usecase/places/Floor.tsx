import { CApiPlaces, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecasePlaceFloor } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecasePlaceFloor = () => {

    const { 
        showMessageError, 
        showMessageSuccess,
        showMessageWarning
    } = VComponentToast();
    const {
        buildingId,
        floorId,
        floorList,
        floorDetail,
        formFloorDetail,
        formFilter,
        isLoadingFloor,
        setBuildingId,
        setFloorId,
        setIsLoadingFloor,
        setFloorList,
        setFloorDetail,
        setFormFloorDetail,
        setFormFilter
    } = LUsecasePlaceFloor();
    const {
        getBuildingFloorListReq,
        getBuildingFloorListAllReq,
        getFloorDetailReq,
        newFloorReq,
        updateFloorReq,
        deleteFloorReq,
    } = CApiPlaces();

    const { buildingId: id, floorId: id2 } = useParams();

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
        } else {
            if (id !== undefined && id !== "-1") {
                setFormFloorDetail({
                    gedung_id: Number(id),
                    nama_lantai: ""
                })
            }
        }
    })

    const loadFloorList = () => {
        if (formFilter !== undefined && buildingId !== undefined) {
            setIsLoadingFloor(true);
            getBuildingFloorListReq(buildingId, formFilter, (res) => {
                if (res.status) {
                    setFloorList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }

    const loadFloorListAll = () => {
        if (formFilter !== undefined) {
            setIsLoadingFloor(true);
            getBuildingFloorListAllReq(formFilter, (res) => {
                if (res.status) {
                    setFloorList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }

    const loadFloorDetail = () => {
        if (buildingId !== undefined && floorId !== undefined) {
            setIsLoadingFloor(true);
            getFloorDetailReq(floorId, (res) => {
                if (res.status) {
                    setFloorDetail(res.data);
                    setFormFloorDetail({
                        gedung_id: res.data.id_gedung,
                        nama_lantai: res.data.nama_lantai
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }

    const doNewFloor = () => {
        if (floorId === undefined && formFloorDetail !== undefined) {
            setIsLoadingFloor(true);
            newFloorReq(formFloorDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }

    const doUpdateFloor = () => {
        if (floorId !== undefined && formFloorDetail !== undefined) {
            setIsLoadingFloor(true);
            updateFloorReq(floorId, formFloorDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }
    
    const doFormFloor = () => {
        if (floorId === undefined) {
            doNewFloor();
        } else {
            doUpdateFloor();
        }
    }

    const doDeleteFloor = () => {
        if (floorDetail !== undefined) {
            setIsLoadingFloor(true);
            deleteFloorReq(floorDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingFloor(false);
                });
            });
        }
    }

    return {
        buildingId,
        floorId,
        isLoadingFloor,

        floorList,
        formFilter,
        floorDetail,
        formFloorDetail,

        loadFloorList,
        loadFloorListAll,
        loadFloorDetail,
        doFormFloor,
        doDeleteFloor,

        setBuildingId,
        setFloorDetail,
        setFormFilter,
        setFormFloorDetail,

        showMessageWarning
    }
}

export default CUsecasePlaceFloor