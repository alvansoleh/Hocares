import { Icon } from "@chakra-ui/react";
import { CUsecaseAsset, CUtilityRouterFunc, CUtilityString } from "controllers";
import { LTemp } from "logics";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardAssetBodyEmbed, VPageDashboardAssetHead } from "../assets/index";

const VPageDashboardReportAsset: React.FC = (): JSX.Element => {

    const {
        assetList,
        formFilter,
        isLoadingAsset,
        setFormFilter,
        loadAssetList,
    } = CUsecaseAsset();

    const { token } = LTemp();
    const token_string = token.get();

    const { type, mode } = useParams();

    useEffect(() => {
        if (formFilter !== undefined && type !== undefined && (formFilter.query?.length || 0) === 0) {
            setFormFilter({
                ...formFilter,
                is_apply: false,
                filter_by: "kondisi",
                query: type
            });
        }
    }, [type, formFilter])

    useEffect(() => {
        if (formFilter !== undefined && (formFilter.query?.length || 0) > 0) {
            loadAssetList();
        }
    }, [formFilter])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.report.asset(Number(mode || "0"))}
        is_show_back={true}
        at={4}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingAsset ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.asset.title}
           description={CUtilityString.table.asset.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    if (type !== undefined) {
                        CUtilityRouterFunc.to(CUtilityString.api.report.asset.download(token_string, type));
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
           body={(<VPageDashboardAssetBodyEmbed
                items={assetList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportAsset