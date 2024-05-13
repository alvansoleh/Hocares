import { Icon, useDisclosure } from "@chakra-ui/react";
import { CUsecaseMaintenance, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardMaintenanceBodyEmbed, VPageDashboardMaintenanceHead } from "../maintenance/index";
import { LTemp } from "logics";
import { useParams } from "react-router-dom";

const VPageDashboardReportMaintenance: React.FC = (): JSX.Element => {

    const {
        maintenanceList,
        formFilter,
        isLoadingMaintenance,
        setFormFilter,
        loadMaintenanceListAll,
    } = CUsecaseMaintenance();

    const { token } = LTemp();
    const token_string = token.get();

    const { mode } = useParams();

    useEffect(() => {
        if (mode !== undefined && formFilter !== undefined && formFilter.page !== undefined) {
            loadMaintenanceListAll(Number(mode), formFilter.page, formFilter.size);
        }
    }, [mode, formFilter?.page])

    return (<VComponentLayoutDashboard
        title={`${CUtilityString.title.dashboard.report.maintenance(Number(mode || "0"))}`}
        is_show_back={true}
        at={5}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingMaintenance ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.maintenance.title}
           description={CUtilityString.table.maintenance.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    if (mode !== undefined) {
                        const temp = Number(mode);
                        if (temp === 0) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.schedule.download(token_string, "terjadwal"));
                        } else if (temp === 1) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.schedule.download(token_string, "berlangsung"));
                        } else if (temp === 2) {
                            CUtilityRouterFunc.to(CUtilityString.api.report.schedule.download(token_string, "selesai"));
                        }
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (maintenanceList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardMaintenanceHead />)}
           body={(<VPageDashboardMaintenanceBodyEmbed
                items={maintenanceList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportMaintenance