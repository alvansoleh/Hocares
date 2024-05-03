import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseMaintenance, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardMaintenanceForm } from "./maintenance/";

const VPageDashboardFormMaintenance: React.FC = (): JSX.Element => {

    const {
        maintenanceId,
        formMaintenanceDetail,
        isLoadingMaintenance,
        loadMaintenanceDetail,
        doFormMaintenance,
        setFormMaintenanceDetail,
    } = CUsecaseMaintenance();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = maintenanceId !== undefined ? CUtilityString.title.dashboard.maintenance.edit : CUtilityString.title.dashboard.maintenance.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (maintenanceId !== undefined) {
            loadMaintenanceDetail();
        }
    }, [maintenanceId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("6", "lihat", userAccessByToken) || (!checkAccess("6", "tambah", userAccessByToken) && maintenanceId === undefined) || (!checkAccess("6", "ubah", userAccessByToken) && maintenanceId !== undefined)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={title.replace(` - ${CUtilityString.title.app}`, "")}
        at={5}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingMaintenance ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardMaintenanceForm
                    mode={maintenanceId !== undefined ? "edit" : "new"}
                    loading={isLoadingMaintenance}
                    value={formMaintenanceDetail}
                    onClick={doFormMaintenance}
                    onChange={setFormMaintenanceDetail} />
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

export default VPageDashboardFormMaintenance