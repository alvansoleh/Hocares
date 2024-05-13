import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiMaintenance = () => {

    const { token } = LTemp();

    const getScheduleListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiMaintenance.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseINF = JSON.parse(result) as MApiMaintenance.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getScheduleListAllReq = (filter: string, callback: (data: MApiMaintenance.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.listAll(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseINF = JSON.parse(result) as MApiMaintenance.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getScheduleDetailReq = (id: number, callback: (data: MApiMaintenance.ResponseDetailINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.detail(id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseDetailINF = JSON.parse(result) as MApiMaintenance.ResponseDetailINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newScheduleReq = (body: MUsecaseMaintenanceForm.Schedule, callback: (data: MApiMaintenance.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseWriteINF = JSON.parse(result) as MApiMaintenance.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateScheduleReq = (id: number, body: MUsecaseMaintenanceForm.Schedule, callback: (data: MApiMaintenance.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.edit(id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseWriteINF = JSON.parse(result) as MApiMaintenance.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteScheduleReq = (id: number, callback: (data: MApiMaintenance.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.maintenance.delete(id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMaintenance.ResponseWriteINF = JSON.parse(result) as MApiMaintenance.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getScheduleListReq,
        getScheduleListAllReq,
        getScheduleDetailReq,
        newScheduleReq,
        updateScheduleReq,
        deleteScheduleReq
    }

}

export default CApiMaintenance