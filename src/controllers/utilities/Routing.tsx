import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CUtilityString from "./String";
import { VPageAuthSignIn, VPageDashboardAsset, VPageDashboardBase, VPageDashboardFormAsset, VPageDashboardFormMaintenance, VPageDashboardFormMappingAsset, VPageDashboardFormUsedAsset, VPageDashboardFormUser, VPageDashboardMaintenance, VPageDashboardMappingAsset, VPageDashboardPlaceBuilding, VPageDashboardPlaceFloor, VPageDashboardPlaceFormBuilding, VPageDashboardPlaceFormFloor, VPageDashboardPlaceFormRoom, VPageDashboardPlaceRoom, VPageDashboardProfile, VPageDashboardReportAsset, VPageDashboardReportMaintenance, VPageDashboardReportPlaceBuilding, VPageDashboardReportPlaceFloor, VPageDashboardReportPlaceRoom, VPageDashboardReportUsedAsset, VPageDashboardUsedAsset, VPageDashboardUser, VPageDashboardUserAccess, VPageHome } from "views/pages";
import CUtilityLoad from "./Load";

const CUtilityRouterFunc = {
    to: (url: string) => {
        window.location.assign(url);
    },
    reload: () => {
        window.location.reload();
    },
    back: () => {
        window.history.back();
    },
    wait: (callback: () => void) => { 
        window.setTimeout(() => {
            callback();
        }, 2000);
    }
}

const CUtilityRouter = createBrowserRouter([
    { path: CUtilityString.path.home, element: <VPageHome /> },
    { path: CUtilityString.path.auth.sign_in, element: <VPageAuthSignIn /> },
    { path: CUtilityString.path.dashboard.index, element: <VPageDashboardBase /> },
    { path: CUtilityString.path.dashboard.profile, element: <VPageDashboardProfile /> },
    { path: CUtilityString.path.dashboard.places.building.list, element: <VPageDashboardPlaceBuilding /> },
    { path: CUtilityString.path.dashboard.places.building.form, element: <VPageDashboardPlaceFormBuilding /> },
    { path: CUtilityString.path.dashboard.places.floor.list, element: <VPageDashboardPlaceFloor /> },
    { path: CUtilityString.path.dashboard.places.floor.form, element: <VPageDashboardPlaceFormFloor /> },
    { path: CUtilityString.path.dashboard.places.room.list, element: <VPageDashboardPlaceRoom /> },
    { path: CUtilityString.path.dashboard.places.room.form, element: <VPageDashboardPlaceFormRoom /> },
    { path: CUtilityString.path.dashboard.user.list, element: <VPageDashboardUser /> },
    { path: CUtilityString.path.dashboard.user.form, element: <VPageDashboardFormUser /> },
    { path: CUtilityString.path.dashboard.user_access.list, element: <VPageDashboardUserAccess /> },
    { path: CUtilityString.path.dashboard.assets.general.list, element: <VPageDashboardAsset /> },
    { path: CUtilityString.path.dashboard.assets.general.form, element: <VPageDashboardFormAsset /> },
    { path: CUtilityString.path.dashboard.maintenance.list, element: <VPageDashboardMaintenance /> },
    { path: CUtilityString.path.dashboard.maintenance.form, element: <VPageDashboardFormMaintenance /> },
    { path: CUtilityString.path.dashboard.assets.used.list, element: <VPageDashboardUsedAsset /> },
    { path: CUtilityString.path.dashboard.assets.used.form, element: <VPageDashboardFormUsedAsset /> },
    { path: CUtilityString.path.dashboard.assets.mapping.list, element: <VPageDashboardMappingAsset /> },
    { path: CUtilityString.path.dashboard.assets.mapping.form, element: <VPageDashboardFormMappingAsset /> },

    { path: CUtilityString.path.dashboard.report.place.building, element: <VPageDashboardReportPlaceBuilding /> },
    { path: CUtilityString.path.dashboard.report.place.floor, element: <VPageDashboardReportPlaceFloor /> },
    { path: CUtilityString.path.dashboard.report.place.room, element: <VPageDashboardReportPlaceRoom /> },
    { path: CUtilityString.path.dashboard.report.asset, element: <VPageDashboardReportAsset /> },
    { path: CUtilityString.path.dashboard.report.used_asset, element: <VPageDashboardReportUsedAsset /> },
    { path: CUtilityString.path.dashboard.report.maintenance, element: <VPageDashboardReportMaintenance /> },
]);

const CUtilityRouterMenu = [
    { path: CUtilityString.path.dashboard.index, label: CUtilityString.title.dashboard.index.replace(" - HOCARES", "") },
    { path: CUtilityString.path.dashboard.profile, label: CUtilityString.title.dashboard.profile.replace(" - HOCARES", "") },

    { path: CUtilityString.path.dashboard.places.building.list, label: CUtilityString.title.dashboard.places.building.list.replace(" - HOCARES", "") },
    
    { path: CUtilityString.path.dashboard.user.list, label: CUtilityString.title.dashboard.user.list.replace(" - HOCARES", "") },
    
    { path: CUtilityString.path.dashboard.assets.general.list, label: CUtilityString.title.dashboard.assets.general.list.replace(" - HOCARES", "") },
    
    { path: CUtilityString.path.dashboard.maintenance.list, label: CUtilityString.title.dashboard.maintenance.list.replace(" - HOCARES", "") },
]

const CUtilityRouting: React.FC = (): JSX.Element => {
    const {} = CUtilityLoad(() => {
        window.addEventListener( "pageshow", function ( event ) {
            console.log(event.persisted);
            if (event.persisted) {
                CUtilityRouterFunc.reload();
            }
        });
    });

    return (<RouterProvider router={CUtilityRouter} />)
}

export {
    CUtilityRouting,
    CUtilityRouterFunc,
    CUtilityRouterMenu
}