import { Box, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUserBody: React.FC<MComponentUsecaseUser.Body> = ({
    items,
    onDelete,
    onEdit,
    onManage
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`user-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.full_name || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.username || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.email || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.no_hp || "-"}</Text></Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Akses Pengguna'>
                            <IconButton aria-label={CUtilityString.buttons.action.detail.text} icon={<Icon as={CUtilityString.buttons.action.detail.icon} />}
                                backgroundColor={CUtilityColor.picton}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onManage(it)} />
                        </Tooltip>
                        <Tooltip label='Ubah Pengguna'>
                            <IconButton aria-label={CUtilityString.buttons.action.edit.text} icon={<Icon as={CUtilityString.buttons.action.edit.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onEdit(it)} />
                        </Tooltip>
                        <Tooltip label='Hapus Pengguna'>
                            <IconButton aria-label={CUtilityString.buttons.action.delete.text} icon={<Icon as={CUtilityString.buttons.action.delete.icon} />}
                                backgroundColor={CUtilityColor.rojo}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onDelete(it)} />
                        </Tooltip>
                    </HStack>
                </Box>
            </HStack>)
        }) : (<Box
            width={"full"}
            borderTop={"1px solid rgba(0,0,0,0.1)"}
            paddingTop={2}>
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.user.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardUserBody