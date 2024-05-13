import { Box, Checkbox, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUserAccessBody: React.FC<MComponentUsecaseUserAccess.Body> = ({
    items,
    onWrite,
    onDelete,
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`user_access-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_menu}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.full_name}</Text></Box>
                <Box flex={1}>
                    <Checkbox defaultChecked={it.lihat === "1"} onChange={((e) => {
                        onWrite({
                            ...it,
                            lihat: e.target.checked ? "1" : "0"
                        })
                    })}></Checkbox>
                </Box>
                <Box flex={1}>
                    <Checkbox isDisabled={it.nama_menu.includes("Laporan") || it.nama_menu.includes("Profil")} defaultChecked={it.tambah === "1"} onChange={((e) => {
                        onWrite({
                            ...it,
                            tambah: e.target.checked ? "1" : "0"
                        })
                    })}></Checkbox>
                </Box>
                <Box flex={1}>
                    <Checkbox isDisabled={it.nama_menu.includes("Laporan")} defaultChecked={it.ubah === "1"} onChange={((e) => {
                        onWrite({
                            ...it,
                            ubah: e.target.checked ? "1" : "0"
                        })
                    })}></Checkbox>
                </Box>
                <Box flex={1}>
                    <Checkbox isDisabled={it.nama_menu.includes("Laporan") || it.nama_menu.includes("Profil")} defaultChecked={it.hapus === "1"} onChange={((e) => {
                        onWrite({
                            ...it,
                            hapus: e.target.checked ? "1" : "0"
                        })
                    })}></Checkbox>
                </Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Hapus Akses'>
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
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.user_access.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardUserAccessBody