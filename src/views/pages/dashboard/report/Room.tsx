import { Icon } from "@chakra-ui/react";
import { CUsecasePlaceRoom, CUtilityRouterFunc, CUtilityString } from "controllers";
import { LTemp } from "logics";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceRoomBodyEmbed, VPageDashboardPlaceRoomHead } from "../places";

const VPageDashboardReportPlaceRoom: React.FC = (): JSX.Element => {

    const {
        roomList,
        formFilter,
        isLoadingRoom,
        setFormFilter,
        loadRoomListAll,
    } = CUsecasePlaceRoom();

    const { token } = LTemp();
    const token_string = token.get();

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadRoomListAll();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.report.place.room}
        is_show_back={true}
        at={2}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingRoom ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.room.title}
           description={CUtilityString.table.places.room.description}
           action={{
                label: CUtilityString.buttons.action.download.text,
                icon: (<Icon as={CUtilityString.buttons.action.download.icon} />),
                onClick: () => {
                    CUtilityRouterFunc.to(CUtilityString.api.report.place.download.room(token_string));
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (roomList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceRoomHead />)}
           body={(<VPageDashboardPlaceRoomBodyEmbed
                items={roomList || []} />)} />) }
    </VComponentLayoutDashboard>)
}

export default VPageDashboardReportPlaceRoom