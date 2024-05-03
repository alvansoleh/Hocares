import { Icon } from "@chakra-ui/react";
import { CUsecasePlaceBuilding, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceBuildingBodyEmbed, VPageDashboardPlaceBuildingHead } from "../places";
import { LTemp } from "logics";

const VPageDashboardReportPlaceBuilding: React.FC = (): JSX.Element => {

    const {
        buildingList,
        formFilter,
        isLoadingBuilding,
        setFormFilter,
        loadBuildingList,
    } = CUsecasePlaceBuilding();

    const { token } = LTemp();
    const token_string = token.get();

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadBuildingList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.report.place.building}
        is_show_back={true}
        at={2}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingBuilding ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.building.title}
           description={CUtilityString.table.places.building.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    CUtilityRouterFunc.to(CUtilityString.api.report.place.download.building(token_string));
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (buildingList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceBuildingHead />)}
           body={(<VPageDashboardPlaceBuildingBodyEmbed
                items={buildingList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportPlaceBuilding