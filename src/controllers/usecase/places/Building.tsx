import { CApiPlaces, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecasePlaceBuilding } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecasePlaceBuilding = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        buildingId,
        buildingList,
        buildingDetail,
        formBuildingDetail,
        formFilter,
        isLoadingBuilding,
        setIsLoadingBuilding,
        setBuildingId,
        setBuildingList,
        setBuildingDetail,
        setFormBuildingDetail,
        setFormFilter
    } = LUsecasePlaceBuilding();
    const {
        getBuildingListReq,
        getBuildingDetailReq,
        newBuildingReq,
        updateBuildingReq,
        deleteBuildingReq
    } = CApiPlaces();

    const { buildingId: id } = useParams();

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
        } else {
            setFormBuildingDetail({
                nama_gedung: ""
            });
        }
    })

    const loadBuildingList = () => {
        if (formFilter !== undefined) {
            setIsLoadingBuilding(true);
            getBuildingListReq(formFilter, (res) => {
                if (res.status) {
                    if (res.data !== undefined) {
                        setBuildingList(res.data);
                    } else {
                        setBuildingList([]);
                    }
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingBuilding(false);
                });
            });
        }
    }

    const loadBuildingDetail = () => {
        if (buildingId !== undefined) {
            setIsLoadingBuilding(true);
            getBuildingDetailReq(buildingId, (res) => {
                if (res.status) {
                    setBuildingDetail(res.data);
                    setFormBuildingDetail({
                        nama_gedung: res.data.nama_gedung
                    })
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingBuilding(false);
                });
            });
        }
    }

    const doNewBuilding = () => {
        if (buildingId === undefined && formBuildingDetail !== undefined) {
            setIsLoadingBuilding(true);
            newBuildingReq(formBuildingDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingBuilding(false);
                });
            });
        }
    }

    const doUpdateBuilding = () => {
        if (buildingId !== undefined && formBuildingDetail !== undefined) {
            setIsLoadingBuilding(true);
            updateBuildingReq(buildingId, formBuildingDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingBuilding(false);
                });
            });
        }
    }
    
    const doFormBuilding = () => {
        if (buildingId === undefined) {
            doNewBuilding();
        } else {
            doUpdateBuilding();
        }
    }

    const doDeleteBuilding = () => {
        if (buildingDetail !== undefined) {
            setIsLoadingBuilding(true);
            deleteBuildingReq(buildingDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingBuilding(false);
                });
            });
        }
    }

    return {
        isLoadingBuilding,

        buildingId,
        buildingList,
        buildingDetail,
        formBuildingDetail,
        formFilter,

        loadBuildingList,
        loadBuildingDetail,
        doFormBuilding,
        doDeleteBuilding,

        setBuildingId,
        setFormFilter,
        setBuildingDetail,
        setFormBuildingDetail,
    }
}

export default CUsecasePlaceBuilding