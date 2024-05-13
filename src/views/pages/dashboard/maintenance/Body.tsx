import { Box, HStack, Icon, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tag, TagLabel, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMaintenanceBody: React.FC<MComponentUsecaseMaintenance.Body> = ({
    items,
    onDelete,
    onEdit,
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`maintenance-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_aset || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.full_name || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.tanggal_waktu || "-"}</Text></Box>
                <Box flex={1}>
                <Popover>
                    <PopoverTrigger>
                        <Tag colorScheme="blue"
                            cursor={"pointer"}
                            size={"sm"}>
                            <TagLabel>Lihat</TagLabel>
                        </Tag>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Notes!</PopoverHeader>
                        <PopoverBody>{it.catatan || "There is no notes!"}</PopoverBody>
                    </PopoverContent>
                </Popover>
                </Box>
                <Box flex={1}>
                    <Tag colorScheme={
                        it.status === "terjadwal" ? "gray" :
                        it.status === "berlangsung" ? "yellow" :
                        "green"
                    }
                        size={"sm"}>
                        <TagLabel>{it.status}</TagLabel>
                    </Tag>
                </Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Ubah Maintenance Schedule'>
                            <IconButton aria-label={CUtilityString.buttons.action.edit.text} icon={<Icon as={CUtilityString.buttons.action.edit.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onEdit(it)} />
                        </Tooltip>
                        <Tooltip label='Hapus Maintenance Schedule'>
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
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.maintenance.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardMaintenanceBody