import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseAsset, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardAssetForm } from "./assets/";

const VPageDashboardFormAsset: React.FC = (): JSX.Element => {

    const {
        assetId,
        formAssetDetail,
        isLoadingAsset,
        loadAssetDetail,
        doFormAsset,
        setFormAssetDetail,
    } = CUsecaseAsset();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = assetId !== undefined ? CUtilityString.title.dashboard.asset.edit : CUtilityString.title.dashboard.asset.new;
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (assetId !== undefined) {
            loadAssetDetail();
        }
    }, [assetId])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("5", "lihat", userAccessByToken) || (!checkAccess("5", "tambah", userAccessByToken) && assetId === undefined) || (!checkAccess("5", "ubah", userAccessByToken) && assetId !== undefined)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={title.replace(` - ${CUtilityString.title.app}`, "")}
        at={4}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingAsset ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardAssetForm
                    loading={isLoadingAsset}
                    value={formAssetDetail}
                    onClick={doFormAsset}
                    onChange={setFormAssetDetail} />
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

export default VPageDashboardFormAsset