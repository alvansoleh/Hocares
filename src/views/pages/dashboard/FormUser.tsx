import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseUser, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardUserForm } from "./users/";

const VPageDashboardFormUser: React.FC = (): JSX.Element => {

    const {
        userId,
        formUserDetail,
        isLoadingUser,
        loadUserDetail,
        doFormUser,
        setFormUserDetail,
    } = CUsecaseUser();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = userId !== undefined ? CUtilityString.title.dashboard.user.edit : CUtilityString.title.dashboard.user.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (userId !== undefined) {
            loadUserDetail();
        }
    }, [userId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("4", "lihat", userAccessByToken) || (!checkAccess("4", "tambah", userAccessByToken) && userId === undefined) || (!checkAccess("4", "ubah", userAccessByToken) && userId !== undefined)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={title.replace(` - ${CUtilityString.title.app}`, "")}
        at={3}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingUser ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardUserForm
                    mode={userId !== undefined ? "edit" : "new"}
                    loading={isLoadingUser}
                    value={formUserDetail}
                    onClick={doFormUser}
                    onChange={setFormUserDetail} />
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

export default VPageDashboardFormUser