import { useState } from "react";

const LUsecaseReport = () => {
    // Setup List
    const [countPlace, setCountPlace] = useState<MApiReport.Place>();
    const [isLoadingPlace, setIsLoadingPlace] = useState(false);
    const [countAsset, setCountAsset] = useState<MApiReport.Asset>();
    const [isLoadingAsset, setIsLoadingAsset] = useState(false);
    const [countAssetTransaction, setCountAssetTransaction] = useState<MApiReport.AssetTransaction>();
    const [isLoadingAssetTransaction, setIsLoadingAssetTransaction] = useState(false);
    const [countSchedule, setCountSchedule] = useState<MApiReport.Schedule>();
    const [isLoadingSchedule, setIsLoadingSchedule] = useState(false);

    // Export Function
    return {
        countPlace,
        countAsset,
        countAssetTransaction,
        countSchedule,
        isLoadingPlace,
        isLoadingAsset,
        isLoadingAssetTransaction,
        isLoadingSchedule,

        setCountPlace,
        setCountAsset,
        setCountAssetTransaction,
        setCountSchedule,
        setIsLoadingPlace,
        setIsLoadingAsset,
        setIsLoadingAssetTransaction,
        setIsLoadingSchedule,
    }
}

export default LUsecaseReport