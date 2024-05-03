import { CApiReport, CUtilityRouterFunc } from "controllers";
import { LUsecaseReport } from "logics";
import { VComponentToast } from "views/components";

const CUsecaseReport = () => {

    const { 
        showMessageError, 
    } = VComponentToast();
    const {
        countAsset,
        countAssetTransaction,
        countPlace,
        countSchedule,

        isLoadingAsset,
        isLoadingAssetTransaction,
        isLoadingPlace,
        isLoadingSchedule,

        setCountAsset,
        setCountAssetTransaction,
        setCountPlace,
        setCountSchedule,

        setIsLoadingAsset,
        setIsLoadingAssetTransaction,
        setIsLoadingPlace,
        setIsLoadingSchedule
    } = LUsecaseReport();
    const {
        getCountAssetReq,
        getCountAssetTransactionReq,
        getCountPlaceReq,
        getCountScheduleReq
    } = CApiReport();

    const loadCountPlace = () => {
        setIsLoadingPlace(true);
        getCountPlaceReq((res) => {
            if (res.status) {
                setCountPlace(res.data);
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingPlace(false);
            });
        });
    }

    const loadCountAsset = () => {
        setIsLoadingAsset(true);
        getCountAssetReq((res) => {
            if (res.status) {
                setCountAsset(res.data);
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingAsset(false);
            });
        });
    }

    const loadCountAssetTransaction = () => {
        setIsLoadingAssetTransaction(true);
        getCountAssetTransactionReq((res) => {
            if (res.status) {
                setCountAssetTransaction(res.data);
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingAssetTransaction(false);
            });
        });
    }

    const loadCountSchedule = () => {
        setIsLoadingSchedule(true);
        getCountScheduleReq((res) => {
            if (res.status) {
                setCountSchedule(res.data);
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingSchedule(false);
            });
        });
    }

    return {
        countAsset,
        countAssetTransaction,
        countPlace,
        countSchedule,

        isLoadingAsset,
        isLoadingAssetTransaction,
        isLoadingPlace,
        isLoadingSchedule,

        loadCountAsset,
        loadCountAssetTransaction,
        loadCountPlace,
        loadCountSchedule
    }
}

export default CUsecaseReport