import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceBuilding, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardPlaceBuildingForm } from "./places";

const VPageDashboardPlaceFormBuilding: React.FC = (): JSX.Element => {

    const {
        buildingId,
        formBuildingDetail,
        isLoadingBuilding,
        loadBuildingDetail,
        doFormBuilding,
        setFormBuildingDetail,
    } = CUsecasePlaceBuilding();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = buildingId !== undefined ? CUtilityString.title.dashboard.places.building.edit : CUtilityString.title.dashboard.places.building.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (buildingId !== undefined) {
            loadBuildingDetail();
        }
    }, [buildingId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("3", "lihat", userAccessByToken) || (!checkAccess("3", "tambah", userAccessByToken) && buildingId === undefined) || (!checkAccess("3", "ubah", userAccessByToken) && buildingId !== undefined)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={title.replace(` - ${CUtilityString.title.app}`, "")}
        at={2}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingBuilding ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardPlaceBuildingForm
                    loading={isLoadingBuilding}
                    value={formBuildingDetail}
                    onClick={doFormBuilding}
                    onChange={setFormBuildingDetail} />
            </TabPanels>
        </Tabs>) }

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

export default VPageDashboardPlaceFormBuilding