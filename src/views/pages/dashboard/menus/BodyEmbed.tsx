import { Box, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMenuBodyEmbed: React.FC<MComponentUsecaseMenu.BodyEmbed> = ({
    items,
    onChoose
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`menu-embed-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_menu || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.path || "-"}</Text></Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Pilih Menu'>
                            <IconButton aria-label={CUtilityString.buttons.action.choose.text} icon={<Icon as={CUtilityString.buttons.action.choose.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onChoose(it)} />
                        </Tooltip>
                    </HStack>
                </Box>
            </HStack>)
        }) : (<Box
            width={"full"}
            borderTop={"1px solid rgba(0,0,0,0.1)"}
            paddingTop={2}>
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.menus.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardMenuBodyEmbed