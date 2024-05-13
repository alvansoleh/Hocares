import { Icon, Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseAuthProfile, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardProfileFieldChangePassword, VPageDashboardProfileFieldGeneral } from "./profile/";
import { useEffect, useState } from "react";

const VPageDashboardProfile: React.FC = (): JSX.Element => {

    const { 
        isLoadingProfile,
        formProfile,
        formPassword,
        setFormProfile,
        setFormPassword,
        loadProfile,
        updateProfile,
        changePassword
    } = CUsecaseAuthProfile();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadProfile();
        loadUserAccess();
    })

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("2", "lihat", userAccessByToken)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.profile.replace(` - ${CUtilityString.title.app}`, "")}
        at={1}>

        { isLoadingProfile ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab><Icon as={CUtilityString.buttons.auth.general.icon} marginRight={2} /> {CUtilityString.buttons.auth.general.text}</Tab>
                <Tab><Icon as={CUtilityString.buttons.auth.change_password.icon} marginRight={2} /> {CUtilityString.buttons.auth.change_password.text}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardProfileFieldGeneral
                    loading={isLoadingProfile}
                    value={formProfile}
                    onClick={() => {
                        if (!checkAccess("2", "ubah", userAccessByToken)) {
                            setIsNotAccessBack(false)
                            onOpenAccessOpen();
                        } else updateProfile();
                    }}
                    onChange={setFormProfile} />
                <VPageDashboardProfileFieldChangePassword
                    loading={isLoadingProfile}
                    value={formPassword}
                    onClick={() => {
                        if (!checkAccess("2", "ubah", userAccessByToken)) {
                            setIsNotAccessBack(false)
                            onOpenAccessOpen();
                        } else changePassword();
                    }}
                    onChange={setFormPassword} />
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

export default VPageDashboardProfile