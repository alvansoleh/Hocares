import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceRoom, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardPlaceRoomForm } from "./places";

const VPageDashboardPlaceFormRoom: React.FC = (): JSX.Element => {

    const {
        roomId,
        formRoomDetail,
        isLoadingRoom,
        loadRoomDetail,
        doFormRoom,
        setFormRoomDetail,
    } = CUsecasePlaceRoom();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = roomId !== undefined ? CUtilityString.title.dashboard.places.room.edit : CUtilityString.title.dashboard.places.room.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (roomId !== undefined) {
            loadRoomDetail();
        }
    }, [roomId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("3", "lihat", userAccessByToken) || (!checkAccess("3", "tambah", userAccessByToken) && roomId === undefined) || (!checkAccess("3", "ubah", userAccessByToken) && roomId !== undefined)) {
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
        { isLoadingRoom ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardPlaceRoomForm
                    loading={isLoadingRoom}
                    value={formRoomDetail}
                    onClick={doFormRoom}
                    onChange={setFormRoomDetail} />
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

export default VPageDashboardPlaceFormRoom