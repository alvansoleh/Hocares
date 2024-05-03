import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseAsset, CUsecaseUsedAsset, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardUsedAssetBody, VPageDashboardUsedAssetDelete, VPageDashboardUsedAssetFilter, VPageDashboardUsedAssetHead } from "./used_asset/index";

const VPageDashboardUsedAsset: React.FC = (): JSX.Element => {

    const {
        assetId,
        usedAssetList,
        usedAssetDetail,
        formFilter,
        isLoadingUsedAsset,
        setFormFilter,
        setUsedAssetDetail,
        loadUsedAssetList,
        doCloseUsedAssetOut,
    } = CUsecaseUsedAsset();

    const {
        assetDetail,
        loadAssetDetail
    } = CUsecaseAsset();

    const { 
        isOpen: isOpenDelete, 
        onClose: onCloseDelete, 
        onOpen: onOpenDelete 
    } = useDisclosure();

    const { 
        isOpen: isOpenFilter, 
        onClose: onCloseFilter, 
        onOpen: onOpenFilter 
    } = useDisclosure();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadUsedAssetList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    useEffect(() => {
        if (assetId !== undefined && assetDetail === undefined) {
            loadAssetDetail();
        }
    }, [assetId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("5", "lihat", userAccessByToken)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={`${CUtilityString.title.dashboard.used_asset.list.replace(` - ${CUtilityString.title.app}`, "")} - ${assetDetail?.nama_aset}`}
        is_show_back={true}
        at={4}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingUsedAsset ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.used_asset.title}
           description={CUtilityString.table.used_asset.description}
           search={{
                placeholder: CUtilityString.table.used_asset.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.used_asset.new,
                onClick: () => {
                    if (assetId !== undefined) {
                        if (!checkAccess("5", "tambah", userAccessByToken)) {
                            setIsNotAccessBack(false);
                            onOpenAccessOpen();
                        } else {
                            CUtilityRouterFunc.to(
                                CUtilityString.path.dashboard.assets.used.form.replace(":asetId", assetId.toString()).replace(":trxId", "-1")
                            );
                        }
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (usedAssetList?.length || 0) === 10 ? () => {
                    setFormFilter({
                        ...formFilter,
                        page: formFilter.page + 1,
                        is_apply: true
                    });
                } : undefined,
                prev: formFilter !== undefined && formFilter.page > 0 ? () => {
                    setFormFilter({
                        ...formFilter,
                        page: formFilter.page - 1,
                        is_apply: true
                    });
                } : undefined
            }}
           header={(<VPageDashboardUsedAssetHead />)}
           body={(<VPageDashboardUsedAssetBody
                items={usedAssetList || []}
                onClose={(item) => {
                    if (!checkAccess("5", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setUsedAssetDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardUsedAssetDelete
            isOpen={isOpenDelete}
            loading={isLoadingUsedAsset}
            value={usedAssetDetail}
            onDelete={doCloseUsedAssetOut}
            onClose={onCloseDelete} />
        <VPageDashboardUsedAssetFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingUsedAsset}
            value={formFilter}
            onApply={setFormFilter} />

        <VComponentModal
            isOpen={isAccessOpen}
            size="sm"
            title="Butuh Akses"
            content={(<Text>Maaf anda tidak memilik akses untuk fitur pada menu ini.</Text>)}
            onClose={() => {
                if (!notAccessBack) {
                    onCloseAccessOpen();
                } else CUtilityRouterFunc.back();
            }} />
    </VComponentLayoutDashboard>)
}

export default VPageDashboardUsedAsset