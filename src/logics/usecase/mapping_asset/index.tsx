import { useState } from "react";

const LUsecaseMappingAsset = () => {
    // Setup List
    const [assetId, setAssetId] = useState<number>();
    const [mappingAssetId, setMappingAssetId] = useState<number>();
    const [mappingAssetList, setMappingAssetList] = useState<MApiAssets.ItemMapping[]>([]);
    const [mappingAssetDetail, setMappingAssetDetail] = useState<MApiAssets.ItemMapping>();
    const [formMappingAssetDetail, setFormMappingAssetDetail] = useState<MUsecaseAssetsForm.AssetMapping>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingMappingAsset, setIsLoadingMappingAsset] = useState(false);

    // Export Function
    return {
        assetId,
        mappingAssetId,
        mappingAssetList,
        mappingAssetDetail,
        formMappingAssetDetail,
        formFilter,
        isLoadingMappingAsset,

        setAssetId,
        setMappingAssetId,
        setMappingAssetList,
        setMappingAssetDetail,
        setFormMappingAssetDetail,
        setFormFilter,
        setIsLoadingMappingAsset,
    }
}

export default LUsecaseMappingAsset