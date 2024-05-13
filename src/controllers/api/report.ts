import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiReport = () => {

    const { token } = LTemp();

    const getCountPlaceReq = (callback: (data: MApiReport.ResponseCountPlaceINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.report.place.count,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiReport.ResponseCountPlaceINF = JSON.parse(result) as MApiReport.ResponseCountPlaceINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getCountAssetReq = (callback: (data: MApiReport.ResponseCountAssetINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.report.asset.count,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiReport.ResponseCountAssetINF = JSON.parse(result) as MApiReport.ResponseCountAssetINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getCountAssetTransactionReq = (callback: (data: MApiReport.ResponseCountAssetTransactionINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.report.asset_used.count,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiReport.ResponseCountAssetTransactionINF = JSON.parse(result) as MApiReport.ResponseCountAssetTransactionINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getCountScheduleReq = (callback: (data: MApiReport.ResponseCountScheduleINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.report.schedule.count,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiReport.ResponseCountScheduleINF = JSON.parse(result) as MApiReport.ResponseCountScheduleINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getCountPlaceReq,
        getCountAssetReq,
        getCountAssetTransactionReq,
        getCountScheduleReq
    }

}

export default CApiReport