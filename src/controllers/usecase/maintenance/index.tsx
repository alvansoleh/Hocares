import { CApiMaintenance, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LTemp, LUsecaseMaintenance } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseMaintenance = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        maintenanceId,
        maintenanceList,
        maintenanceDetail,
        formMaintenanceDetail,
        formFilter,
        isLoadingMaintenance,
        setIsLoadingMaintenance,
        setMaintenanceId,
        setMaintenanceList,
        setMaintenanceDetail,
        setFormMaintenanceDetail,
        setFormFilter
    } = LUsecaseMaintenance();
    const { active_user } = LTemp();
    const {
        getScheduleListReq,
        getScheduleListAllReq,
        getScheduleDetailReq,
        newScheduleReq,
        updateScheduleReq,
        deleteScheduleReq
    } = CApiMaintenance();

    const { id } = useParams();

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
            setMaintenanceId(Number(id));
        } else {
            const temp = active_user.get();
            setFormMaintenanceDetail({
                catatan: "",
                id_aset: -1,
                id_pencatat: temp?.id || -1,
                tanggal_waktu: "",
                status: "",
            });
        }
    })

    const loadMaintenanceList = () => {
        if (formFilter !== undefined) {
            setIsLoadingMaintenance(true);
            getScheduleListReq(formFilter, (res) => {
                if (res.status) {
                    if (res.data !== undefined) {
                        setMaintenanceList(res.data);
                    } else {
                        setMaintenanceList([]);
                    }
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMaintenance(false);
                });
            });
        }
    }

    const loadMaintenanceListAll = (mode: number, page: number, limit: number) => {
        let tempFormFilter = `page=${page}&limit=${limit}&filter_by=status&sort_by=DESC&query=`;
        if (mode === 0) {
            tempFormFilter += `terjadwal`;
        } else if (mode === 1) {
            tempFormFilter += `berlangsung`;
        } else if (mode === 2) {
            tempFormFilter += `selesai`;
        }

        setIsLoadingMaintenance(true);
        getScheduleListAllReq(tempFormFilter, (res) => {
            if (res.status) {
                if (res.data !== undefined) {
                    setMaintenanceList(res.data);
                } else {
                    setMaintenanceList([]);
                }
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingMaintenance(false);
            });
        });
    }

    const loadMaintenanceDetail = () => {
        if (maintenanceId !== undefined) {
            setIsLoadingMaintenance(true);
            getScheduleDetailReq(maintenanceId, (res) => {
                if (res.status) {
                    setMaintenanceDetail(res.data);
                    setFormMaintenanceDetail({
                        catatan: res.data.catatan,
                        id_aset: res.data.id_aset,
                        id_pencatat: res.data.id_pencatat,
                        tanggal_waktu: res.data.tanggal_waktu,
                        status: res.data.status,
                    })
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMaintenance(false);
                });
            });
        }
    }

    const doNewMaintenance = () => {
        if (maintenanceId === undefined && formMaintenanceDetail !== undefined) {
            setIsLoadingMaintenance(true);
            newScheduleReq(formMaintenanceDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMaintenance(false);
                });
            });
        }
    }

    const doUpdateMaintenance = () => {
        if (maintenanceId !== undefined && formMaintenanceDetail !== undefined) {
            setIsLoadingMaintenance(true);
            updateScheduleReq(maintenanceId, formMaintenanceDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMaintenance(false);
                });
            });
        }
    }
    
    const doFormMaintenance = () => {
        if (maintenanceId === undefined) {
            doNewMaintenance();
        } else {
            doUpdateMaintenance();
        }
    }

    const doDeleteMaintenance = () => {
        if (maintenanceDetail !== undefined) {
            setIsLoadingMaintenance(true);
            deleteScheduleReq(maintenanceDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMaintenance(false);
                });
            });
        }
    }

    return {
        isLoadingMaintenance,

        maintenanceId,
        maintenanceList,
        maintenanceDetail,
        formMaintenanceDetail,
        formFilter,

        loadMaintenanceList,
        loadMaintenanceListAll,
        loadMaintenanceDetail,
        doFormMaintenance,
        doDeleteMaintenance,

        setFormFilter,
        setMaintenanceDetail,
        setFormMaintenanceDetail,
    }
}

export default CUsecaseMaintenance