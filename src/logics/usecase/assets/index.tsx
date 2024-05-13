import { useState } from "react";

const LUsecaseAsset = () => {
    // Setup List
    const [assetId, setAssetId] = useState<number>();
    const [assetList, setAssetList] = useState<MApiAssets.Item[]>([]);
    const [assetDetail, setAssetDetail] = useState<MApiAssets.Item>();
    const [formAssetDetail, setFormAssetDetail] = useState<MUsecaseAssetsForm.Asset>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingAsset, setIsLoadingAsset] = useState(false);

    // Export Function
    return {
        assetId,
        assetList,
        assetDetail,
        formAssetDetail,
        formFilter,
        isLoadingAsset,

        setAssetId,
        setAssetList,
        setAssetDetail,
        setFormAssetDetail,
        setFormFilter,
        setIsLoadingAsset,
    }
}

export default LUsecaseAsset