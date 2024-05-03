import { Box, GridItem, HStack, Icon, SimpleGrid, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { CUsecaseAuthProfile, CUsecaseUserAccess, CUtilityColor, CUtilityMeta, CUtilityRouterFunc, CUtilityRouterMenu, CUtilityString } from "controllers";
import { LTemp } from "logics";
import { useEffect } from "react";
import VComponentModal from "../modal";

const VComponentLayoutDashboard: React.FC<MComponentGlobalLayout.Title> = ({
    title,
    children,
    at,
    is_show_back,
    onBack
}): JSX.Element => {

    const { isLogged } = LTemp();
    const { setTitle } = CUtilityMeta();
    const {
        profile,
        isLoadingProfile,
        loadProfile,
        doLogout,
    } = CUsecaseAuthProfile();
    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    useEffect(() => {
        if (isLogged !== undefined) {
            if (!isLogged) {
                CUtilityRouterFunc.to(CUtilityString.path.auth.sign_in);
            } else {
                setTitle(title || "");
                loadUserAccess();
            }
        }
    }, [isLogged])

    useEffect(() => {
        if (userAccessByToken.length > 0 && isLogged !== undefined) {
            if (isLogged) {
                loadProfile();
            }
        }
    }, [userAccessByToken])

    const checkUserAccessBeforeRedirec = (pathDestination: string) => {
        if (userAccessByToken.length > 0) {
            let findItem = userAccessByToken.find((it) => it.path === pathDestination);
            if (findItem !== undefined) {
                if (findItem.lihat === "0") {
                    onOpenAccessOpen();
                } else {
                    CUtilityRouterFunc.to(pathDestination)
                }
            } else {
                CUtilityRouterFunc.to(pathDestination)
            }
        } else {
            CUtilityRouterFunc.to(pathDestination)
        }
    }

    return (<SimpleGrid
        columns={6}
        width={"full"}
        height={"100vh"}
        position={"relative"}>

        <GridItem 
            colSpan={1}
            backgroundColor={CUtilityColor.violet}
            paddingTop={4}>
                <Text 
                    fontSize={28} 
                    fontWeight={"bold"}
                    textColor={CUtilityColor.white}
                    width={"full"}
                    textAlign={"center"}>{CUtilityString.title.app}</Text>

                <Box
                    backgroundColor={"rgba(0,0,0,0.1)"}
                    paddingY={2}
                    marginTop={4}
                    marginBottom={2}>
                    <Text 
                        fontSize={14} 
                        textColor={CUtilityColor.white}
                        width={"full"}
                        textAlign={"center"}>Selamat datang, <strong>{isLoadingProfile ? "-" : profile?.full_name.substring(0,16)}</strong></Text>
                </Box>

                {CUtilityRouterMenu.map((it, i) => {
                    return (<Box key={`menu-item-${i}`}
                    paddingY={2}
                    paddingX={4}
                    cursor={"pointer"}
                    borderBottom={"1px solid rgba(0,0,0,0.1)"}
                    backgroundColor={i === at ? "rgba(0,0,0,0.1)" : "transparent"}
                    _hover={{
                        backgroundColor: "rgba(0,0,0,0.1)"
                    }}
                    onClick={() => checkUserAccessBeforeRedirec(it.path)}>
                        <Text 
                            fontSize={14}
                            textColor={CUtilityColor.white}
                            width={"full"}
                            textAlign={"left"}>
                                {it.label}
                            </Text>
                    </Box>)
                })}
                <Box
                    paddingY={2}
                    paddingX={4}
                    cursor={"pointer"}
                    borderBottom={"1px solid rgba(0,0,0,0.1)"}
                    backgroundColor={"transparent"}
                    _hover={{
                        backgroundColor: "rgba(0,0,0,0.1)"
                    }}
                    onClick={() => doLogout()}>
                        <Text 
                            fontSize={14}
                            textColor={CUtilityColor.white}
                            width={"full"}
                            textAlign={"left"}>
                                {CUtilityString.buttons.auth.sign_out.text}
                            </Text>
                    </Box>
            </GridItem>
        
        <GridItem colSpan={5}>
            <VStack spacing={4} flex={1}
                minHeight={"100vh"}>
                <HStack width={"full"} spacing={4} paddingX={4} paddingTop={4}>
                    {is_show_back !== undefined && is_show_back && (<Icon as={CUtilityString.buttons.action.back.icon}
                        cursor={"pointer"}
                        fontSize={20}
                        marginTop={1}
                        textColor={CUtilityColor.gray}
                        onClick={() => {
                            if (onBack !== undefined) onBack();
                        }} />)}
                    <Text fontSize={20} fontWeight={"semibold"} textColor={CUtilityColor.gray}>{title}</Text>
                </HStack>
                {children}
            </VStack>
        </GridItem>

        <VComponentModal
            isOpen={isAccessOpen}
            size="sm"
            title="Butuh Akses"
            content={(<Text>Maaf anda tidak memilik akses untuk menu ini.</Text>)}
            onClose={onCloseAccessOpen} />

    </SimpleGrid>)
}

export default VComponentLayoutDashboard