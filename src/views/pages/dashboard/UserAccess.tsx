import { Box, Button, HStack, Icon, Spacer, useDisclosure } from "@chakra-ui/react";
import { CUsecaseMenus, CUsecaseUserAccess, CUtilityColor, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardMenuBodyEmbed, VPageDashboardMenuHead } from "./menus";
import { VPageDashboardUserAccessBody, VPageDashboardUserAccessHead } from "./user_access";

const VPageDashboardUserAccess: React.FC = (): JSX.Element => {

    const {
        isLoadingUserAccess,
        userId,
        formUserAccess,
        writeUserAccess,

        loadUserAccessList,
        doWriteUserAccess,
        doDeleteUserAccess
    } = CUsecaseUserAccess();

    const {
        loadMenuList,
        getNewMenu,
        isLoadingMenu,
        menuList
    } = CUsecaseMenus();

    const { 
        isOpen: isOpenChoose, 
        onClose: onCloseChoose, 
        onOpen: onOpenChoose 
    } = useDisclosure();
    
    useEffect(() => {
        if (userId !== undefined) {
            loadUserAccessList();
            loadMenuList();
        }
    }, [userId])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.user_access.list.replace(` - ${CUtilityString.title.app}`, "")}
        at={3}
        is_show_back={true}
        onBack={() => {
            CUtilityRouterFunc.back();
        }}>
        { isLoadingUserAccess ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.user_access.title}
           description={CUtilityString.table.user_access.description}
           action={{
                label: CUtilityString.table.user_access.new,
                onClick: onOpenChoose
           }}
           header={(<VPageDashboardUserAccessHead />)}
           body={(<VPageDashboardUserAccessBody
                items={formUserAccess || []}
                onWrite={(item) => {
                    writeUserAccess(item);
                }}
                onDelete={(item) => {
                    if (item.id !== "") {
                        doDeleteUserAccess(item.id);
                    }
                }} />)} />) }

        {!isLoadingUserAccess && (<HStack width={"full"} paddingX={4} paddingTop={4} borderTop={"1px solid rgba(0,0,0,0.1)"}>
            <Spacer />
            <Button aria-label="Save Button" size={"md"} backgroundColor={CUtilityColor.picton}
                textColor={"white"}
                leftIcon={<Icon as={CUtilityString.buttons.action.save.icon} />}
                onClick={() => {
                    doWriteUserAccess();
                }}>{CUtilityString.buttons.action.save.text}</Button>
        </HStack>)}

        <VComponentModal
            isOpen={isOpenChoose}
            size="4xl"
            title={`Pilih ${CUtilityString.title.dashboard.menus.list.replace(` - ${CUtilityString.title.app}`, "")}`}
            content={(<Box width={"full"}>
                { isLoadingMenu ? (<VComponentLoader />) : (<VComponentTableBase 
                    title={CUtilityString.table.menus.title}
                    description={CUtilityString.table.menus.description}
                    header={(<VPageDashboardMenuHead />)}
                    body={(<VPageDashboardMenuBodyEmbed
                            items={menuList}
                            onChoose={(item) => {
                                if (userId !== undefined) {
                                    const isFind = formUserAccess.findIndex((it) => it.id_menu === item.id)
                                    if (isFind === -1) {
                                        writeUserAccess({
                                            ...getNewMenu(Number(item.id), userId),
                                            lihat: "1"
                                        });
                                    }
                                    onCloseChoose();
                                }
                            }} />)} />) }
            </Box>)}
            onClose={onCloseChoose} />
    </VComponentLayoutDashboard>)
}

export default VPageDashboardUserAccess