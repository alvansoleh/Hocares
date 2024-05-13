import { Icon } from "@chakra-ui/react";
import { CUsecaseUsedAsset, CUtilityRouterFunc, CUtilityString } from "controllers";
import { LTemp } from "logics";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardUsedAssetBodyEmbed, VPageDashboardUsedAssetHead } from "../used_asset/index";

const VPageDashboardReportUsedAsset: React.FC = (): JSX.Element => {

    const {
        usedAssetList,
        formFilter,
        isLoadingUsedAsset,
        setFormFilter,
        loadUsedAssetListAll,
    } = CUsecaseUsedAsset();

    const { token } = LTemp();
    const token_string = token.get();

    const { mode } = useParams();

    useEffect(() => {
        if (mode !== undefined && formFilter !== undefined && formFilter.page !== undefined) {
            loadUsedAssetListAll(Number(mode), formFilter.page, formFilter.size);
        }
    }, [mode, formFilter?.page])

    return (<VComponentLayoutDashboard
        title={`${CUtilityString.title.dashboard.report.used_asset(Number(mode || "0"))}`}
        is_show_back={true}
        at={4}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingUsedAsset ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.used_asset.title}
           description={CUtilityString.table.used_asset.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    if (mode !== undefined) {
                        const temp = Number(mode);
                        if (temp === 0) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.asset_used.download(token_string, "in", "", 1));
                        } else if (temp === 1) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.asset_used.download(token_string, "out", "dijual", 1));
                        } else if (temp === 2) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.asset_used.download(token_string, "out", "rusak", 1));
                        } else if (temp === 3) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.asset_used.download(token_string, "out", "pinjam", 0));
                        } else if (temp === 4) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.asset_used.download(token_string, "out", "pinjam", 1));
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
           body={(<VPageDashboardUsedAssetBodyEmbed
                items={usedAssetList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportUsedAsset