import { Tab, TabList, TabPanels, Tabs, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseUsedAsset, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal } from "views/components";
import { VPageDashboardUsedAssetForm } from "./used_asset/index";
import { useEffect, useState } from "react";

const VPageDashboardFormUsedAsset: React.FC = (): JSX.Element => {

    const {
        isLoadingUsedAsset,
        formUsedAssetDetail,
        setFormUsedAssetDetail,
        doFormUsedAsset
    } = CUsecaseUsedAsset();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const title = CUtilityString.title.dashboard.used_asset.new.replace(` - ${CUtilityString.title.app}`, "");
    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("5", "lihat", userAccessByToken) || (!checkAccess("5", "tambah", userAccessByToken))) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={title}
        at={2}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingUsedAsset ? (<VComponentLoader />) : (<Tabs width={"full"}>
            <TabList paddingX={4}>
                <Tab>{title.replace(` - ${CUtilityString.title.app}`, "")}</Tab>
            </TabList>
            <TabPanels>
                <VPageDashboardUsedAssetForm
                    loading={isLoadingUsedAsset}
                    value={formUsedAssetDetail}
                    onClick={() => {
                        if (formUsedAssetDetail?.jenis_transaksi === "masuk") {
                            doFormUsedAsset("in");
                        } else {
                            doFormUsedAsset("out");
                        }
                    }}
                    onChange={setFormUsedAssetDetail} />
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

export default VPageDashboardFormUsedAsset