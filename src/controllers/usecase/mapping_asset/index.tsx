import { CApiAssets, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecaseMappingAsset } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseMappingAsset = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        assetId,
        mappingAssetId,
        mappingAssetList,
        mappingAssetDetail,
        formMappingAssetDetail,
        formFilter,
        isLoadingMappingAsset,
        setAssetId,
        setMappingAssetId,
        setIsLoadingMappingAsset,
        setMappingAssetList,
        setMappingAssetDetail,
        setFormMappingAssetDetail,
        setFormFilter
    } = LUsecaseMappingAsset();
    const {
        getAssetMappingListReq,
        newAssetMappingInReq,
        deleteAssetMappingReq,
    } = CApiAssets();

    const { asetId: id, trxId: id2 } = useParams();

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
            setAssetId(Number(id));
        }
        if (id2 !== undefined && id2 !== "-1") {
            setMappingAssetId(Number(id2));
        } else {
            if (id !== undefined && id !== "-1") {
                setFormMappingAssetDetail({
                    id_aset: Number(id),
                    id_gedung: -1,
                    id_lantai: undefined,
                    id_ruangan: undefined,
                })
            }
        }
    })

    const loadMappingAssetList = () => {
        if (formFilter !== undefined && assetId !== undefined) {
            setIsLoadingMappingAsset(true);
            getAssetMappingListReq(assetId, formFilter, (res) => {
                if (res.status) {
                    setMappingAssetList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMappingAsset(false);
                });
            });
        }
    }

    const doNewMappingAsset = () => {
        if (mappingAssetId === undefined && formMappingAssetDetail !== undefined) {
            setIsLoadingMappingAsset(true);
            newAssetMappingInReq(formMappingAssetDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMappingAsset(false);
                });
            });
        }
    }

    const doDeleteMappingAsset = () => {
        if (mappingAssetDetail !== undefined) {
            setIsLoadingMappingAsset(true);
            deleteAssetMappingReq(mappingAssetDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingMappingAsset(false);
                });
            });
        }
    }

    return {
        assetId,
        mappingAssetId,
        isLoadingMappingAsset,

        mappingAssetList,
        formFilter,
        mappingAssetDetail,
        formMappingAssetDetail,

        loadMappingAssetList,
        doNewMappingAsset,
        doDeleteMappingAsset,

        setMappingAssetDetail,
        setFormFilter,
        setFormMappingAssetDetail,
    }
}

export default CUsecaseMappingAsset