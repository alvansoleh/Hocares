import { CApiAssets, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LTemp, LUsecaseUsedAsset } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseUsedAsset = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        assetId,
        usedAssetId,
        usedAssetList,
        usedAssetDetail,
        formUsedAssetDetail,
        formFilter,
        isLoadingUsedAsset,
        setAssetId,
        setUsedAssetId,
        setIsLoadingUsedAsset,
        setUsedAssetList,
        setUsedAssetDetail,
        setFormUsedAssetDetail,
        setFormFilter
    } = LUsecaseUsedAsset();
    const { active_user } = LTemp();
    const {
        getAssetUsedListReq,
        getAssetUsedListAllReq,
        newAssetUsedInReq,
        newAssetUsedOutReq,
        closeAssetUsedOutReq
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
            setUsedAssetId(Number(id2));
        } else {
            if (id !== undefined && id !== "-1") {
                const temp = active_user.get();
                setFormUsedAssetDetail({
                    id_aset: Number(id),
                    id_pencatat: temp?.id || -1,
                    jenis_transaksi: "",
                    jumlah: 0,
                    keterangan: "",
                    status_keluar: ""
                })
            }
        }
    })

    const loadUsedAssetList = () => {
        if (formFilter !== undefined && assetId !== undefined) {
            setIsLoadingUsedAsset(true);
            getAssetUsedListReq(assetId, formFilter, (res) => {
                if (res.status) {
                    setUsedAssetList(res.data);
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUsedAsset(false);
                });
            });
        }
    }

    const loadUsedAssetListAll = (mode: number, page: number, limit: number) => {
        let tempFormFilter = `page=${page}&limit=${limit}&filter_by=jenis_transaksi&sort_by=DESC&query=`;
        if (mode === 0) tempFormFilter += `masuk`
        else {
            tempFormFilter += `keluar`
            if (mode >= 1) {
                if (mode === 1) tempFormFilter += `&status_keluar=dijual`
                else if (mode === 2) tempFormFilter += `&status_keluar=rusak`
                else {
                    tempFormFilter += `&status_keluar=pinjam`
                    if (mode === 3) tempFormFilter += `&is_closed=0`
                    else tempFormFilter += `&is_closed=1`
                }
            }
        }

        setIsLoadingUsedAsset(true);
        getAssetUsedListAllReq(tempFormFilter, (res) => {
            if (res.status) {
                setUsedAssetList(res.data);
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingUsedAsset(false);
            });
        });
    }

    const doNewUsedAssetIn = () => {
        if (usedAssetId === undefined && formUsedAssetDetail !== undefined) {
            setIsLoadingUsedAsset(true);
            newAssetUsedInReq(formUsedAssetDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUsedAsset(false);
                });
            });
        }
    }

    const doNewUsedAssetOut = () => {
        if (usedAssetId === undefined && formUsedAssetDetail !== undefined) {
            setIsLoadingUsedAsset(true);
            newAssetUsedOutReq(formUsedAssetDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUsedAsset(false);
                });
            });
        }
    }
    
    const doFormUsedAsset = (mode: "in" | "out") => {
        if (mode === "in") {
            doNewUsedAssetIn();
        } else {
            doNewUsedAssetOut();
        }
    }

    const doCloseUsedAssetOut = () => {
        if (usedAssetDetail !== undefined) {
            setIsLoadingUsedAsset(true);
            closeAssetUsedOutReq({
                id_transaction: usedAssetDetail.id
            }, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUsedAsset(false);
                });
            });
        }
    }

    return {
        assetId,
        usedAssetId,
        isLoadingUsedAsset,

        usedAssetList,
        formFilter,
        usedAssetDetail,
        formUsedAssetDetail,

        loadUsedAssetList,
        loadUsedAssetListAll,
        doFormUsedAsset,
        doCloseUsedAssetOut,

        setUsedAssetDetail,
        setFormFilter,
        setFormUsedAssetDetail,
    }
}

export default CUsecaseUsedAsset