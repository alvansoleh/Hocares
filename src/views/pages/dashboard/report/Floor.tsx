import { Icon } from "@chakra-ui/react";
import { CUsecasePlaceFloor, CUtilityRouterFunc, CUtilityString } from "controllers";
import { LTemp } from "logics";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceFloorBodyEmbed, VPageDashboardPlaceFloorHead } from "../places";

const VPageDashboardReportPlaceFloor: React.FC = (): JSX.Element => {

    const {
        floorList,
        formFilter,
        isLoadingFloor,
        setFormFilter,
        loadFloorListAll,
    } = CUsecasePlaceFloor();

    const { token } = LTemp();
    const token_string = token.get();

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadFloorListAll();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.report.place.floor}
        is_show_back={true}
        at={2}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingFloor ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.floor.title}
           description={CUtilityString.table.places.floor.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    CUtilityRouterFunc.to(CUtilityString.api.report.place.download.floor(token_string));
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (floorList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceFloorHead />)}
           body={(<VPageDashboardPlaceFloorBodyEmbed
                items={floorList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportPlaceFloor