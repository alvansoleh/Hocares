import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseAsset, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardAssetBody, VPageDashboardAssetDelete, VPageDashboardAssetFilter, VPageDashboardAssetHead } from "./assets/index";
import { LTemp } from "logics";

const VPageDashboardAsset: React.FC = (): JSX.Element => {

    const {
        assetList,
        assetDetail,
        formFilter,
        isLoadingAsset,
        setFormFilter,
        setAssetDetail,
        loadAssetList,
        doDeleteAsset
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

    const { token } = LTemp();
    const token_temp = token.get();
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadAssetList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

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
        title={CUtilityString.title.dashboard.asset.list.replace(` - ${CUtilityString.title.app}`, "")}
        at={4}>
        { isLoadingAsset ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.asset.title}
           description={CUtilityString.table.asset.description}
           search={{
                placeholder: CUtilityString.table.asset.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.asset.new,
                onClick: () => {
                    if (!checkAccess("5", "tambah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.assets.general.form.replace(":asetId", "-1")
                        );
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (assetList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardAssetHead />)}
           body={(<VPageDashboardAssetBody
                items={assetList || []}
                onView={(type, item) => {
                    if (type === "history") {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.assets.used.list.replace(":asetId", item.id.toString())
                        );
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.assets.mapping.list.replace(":asetId", item.id.toString())
                        );
                    }
                }}
                onDownloadLabel={(item) => {
                    CUtilityRouterFunc.to(
                        CUtilityString.api.report.asset.print_label(token_temp, item.id)
                    );
                }}
                onEdit={(item) => {
                    if (!checkAccess("5", "ubah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.assets.general.form.replace(":asetId", item.id.toString())
                        );
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("5", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setAssetDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardAssetDelete
            isOpen={isOpenDelete}
            loading={isLoadingAsset}
            value={assetDetail}
            onDelete={doDeleteAsset}
            onClose={onCloseDelete} />
        <VPageDashboardAssetFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingAsset}
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

export default VPageDashboardAsset