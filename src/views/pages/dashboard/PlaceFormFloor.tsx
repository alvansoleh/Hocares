import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceFloor, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardPlaceFloorForm } from "./places";

const VPageDashboardPlaceFormFloor: React.FC = (): JSX.Element => {

    const {
        floorId,
        formFloorDetail,
        isLoadingFloor,
        loadFloorDetail,
        doFormFloor,
        setFormFloorDetail,
    } = CUsecasePlaceFloor();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = floorId !== undefined ? CUtilityString.title.dashboard.places.floor.edit : CUtilityString.title.dashboard.places.floor.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (floorId !== undefined) {
            loadFloorDetail();
        }
    }, [floorId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("3", "lihat", userAccessByToken) || (!checkAccess("3", "tambah", userAccessByToken) && floorId === undefined) || (!checkAccess("3", "ubah", userAccessByToken) && floorId !== undefined)) {
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
        { isLoadingFloor ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardPlaceFloorForm
                    loading={isLoadingFloor}
                    value={formFloorDetail}
                    onClick={doFormFloor}
                    onChange={setFormFloorDetail} />
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

export default VPageDashboardPlaceFormFloor