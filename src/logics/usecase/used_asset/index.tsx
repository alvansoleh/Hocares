import { useState } from "react";

const LUsecaseUsedAsset = () => {
    // Setup List
    const [assetId, setAssetId] = useState<number>();
    const [usedAssetId, setUsedAssetId] = useState<number>();
    const [usedAssetList, setUsedAssetList] = useState<MApiAssets.ItemUsed[]>([]);
    const [usedAssetDetail, setUsedAssetDetail] = useState<MApiAssets.ItemUsed>();
    const [formUsedAssetDetail, setFormUsedAssetDetail] = useState<MUsecaseAssetsForm.AssetUsed>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingUsedAsset, setIsLoadingUsedAsset] = useState(false);

    // Export Function
    return {
        assetId,
        usedAssetId,
        usedAssetList,
        usedAssetDetail,
        formUsedAssetDetail,
        formFilter,
        isLoadingUsedAsset,

        setAssetId,
        setUsedAssetId,
        setUsedAssetList,
        setUsedAssetDetail,
        setFormUsedAssetDetail,
        setFormFilter,
        setIsLoadingUsedAsset,
    }
}

export default LUsecaseUsedAsset