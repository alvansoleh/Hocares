import { Box, HStack, Icon, IconButton, Tag, TagLabel, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardAssetBody: React.FC<MComponentUsecaseAsset.Body> = ({
    items,
    onView,
    onDownloadLabel,
    onDelete,
    onEdit,
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`asset-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_aset || "-"}</Text></Box>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.jenis_aset || "-"}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nomor_seri || "-"}</Text></Box>
                <Box flex={1}>
                    <Tag colorScheme={
                            it.kondisi === "tersedia" ? "green" :
                            "red"
                        }
                            size={"sm"}>
                            <TagLabel>{it.kondisi}</TagLabel>
                        </Tag>
                </Box>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.harga || "-"}</Text></Box>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.jumlah || "-"}</Text></Box>
                <Box flex={2}>
                    <HStack width={"full"}>
                        <Tooltip label='Detail Aset'>
                            <IconButton aria-label={CUtilityString.buttons.action.detail.text} icon={<Icon as={CUtilityString.buttons.action.detail.icon} />}
                                backgroundColor={CUtilityColor.picton}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onView("mapping", it)} />
                        </Tooltip>
                        <Tooltip label='Riwayat Used Aset '>
                            <IconButton aria-label={CUtilityString.buttons.action.history.text} icon={<Icon as={CUtilityString.buttons.action.history.icon} />}
                                backgroundColor={CUtilityColor.coffee}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onView("history", it)} />
                        </Tooltip>
                        <Tooltip label='Cetak Label'>
                            <IconButton aria-label={CUtilityString.buttons.action.label.text} icon={<Icon as={CUtilityString.buttons.action.label.icon} />}
                                backgroundColor={CUtilityColor.boulder}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onDownloadLabel(it)} />
                        </Tooltip>
                        <Tooltip label='Edit Aset'>
                            <IconButton aria-label={CUtilityString.buttons.action.edit.text} icon={<Icon as={CUtilityString.buttons.action.edit.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onEdit(it)} />
                        </Tooltip>
                        <Tooltip label='Hapus Aset'>
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
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.asset.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardAssetBody