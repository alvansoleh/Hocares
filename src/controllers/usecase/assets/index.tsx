import { CApiAssets, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecaseAsset } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseAsset = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        assetId,
        assetList,
        assetDetail,
        formAssetDetail,
        formFilter,
        isLoadingAsset,
        setIsLoadingAsset,
        setAssetId,
        setAssetList,
        setAssetDetail,
        setFormAssetDetail,
        setFormFilter
    } = LUsecaseAsset();
    const {
        getAssetListReq,
        getAssetDetailReq,
        newAssetReq,
        updateAssetReq,
        deleteAssetReq
    } = CApiAssets();

    const { asetId: id } = useParams();

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
        } else {
            setFormAssetDetail({
                harga: 0,
                jenis_aset: "",
                jumlah: 0,
                kondisi: "",
                nama_aset: "",
                nomor_seri: ""
            });
        }
    })

    const loadAssetList = () => {
        if (formFilter !== undefined) {
            setIsLoadingAsset(true);
            getAssetListReq(formFilter, (res) => {
                if (res.status) {
                    if (res.data !== undefined) {
                        setAssetList(res.data);
                    } else {
                        setAssetList([]);
                    }
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingAsset(false);
                });
            });
        }
    }

    const loadAssetDetail = () => {
        if (assetId !== undefined) {
            setIsLoadingAsset(true);
            getAssetDetailReq(assetId, (res) => {
                if (res.status) {
                    setAssetDetail(res.data);
                    setFormAssetDetail({
                        harga: Number(`${res.data.harga}`),
                        jenis_aset: res.data.jenis_aset,
                        jumlah: Number(`${res.data.jumlah}`),
                        kondisi: res.data.kondisi,
                        nama_aset: res.data.nama_aset,
                        nomor_seri: res.data.nomor_seri,
                    })
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingAsset(false);
                });
            });
        }
    }

    const doNewAsset = () => {
        if (assetId === undefined && formAssetDetail !== undefined) {
            setIsLoadingAsset(true);
            newAssetReq(formAssetDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingAsset(false);
                });
            });
        }
    }

    const doUpdateAsset = () => {
        if (assetId !== undefined && formAssetDetail !== undefined) {
            setIsLoadingAsset(true);
            updateAssetReq(assetId, formAssetDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingAsset(false);
                });
            });
        }
    }
    
    const doFormAsset = () => {
        if (assetId === undefined) {
            doNewAsset();
        } else {
            doUpdateAsset();
        }
    }

    const doDeleteAsset = () => {
        if (assetDetail !== undefined) {
            setIsLoadingAsset(true);
            deleteAssetReq(assetDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingAsset(false);
                });
            });
        }
    }

    return {
        isLoadingAsset,

        assetId,
        assetList,
        assetDetail,
        formAssetDetail,
        formFilter,

        loadAssetList,
        loadAssetDetail,
        doFormAsset,
        doDeleteAsset,

        setAssetId,
        setFormFilter,
        setAssetDetail,
        setFormAssetDetail,
    }
}

export default CUsecaseAsset