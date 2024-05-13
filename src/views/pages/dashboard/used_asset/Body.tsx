import { Box, HStack, Icon, IconButton, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Tag, TagLabel, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUsedAssetBody: React.FC<MComponentUsecaseUsedAsset.Body> = ({
    items,
    onClose
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`building-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_aset}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.full_name}</Text></Box>
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
                        <PopoverBody>{it.keterangan || "There is no notes!"}</PopoverBody>
                    </PopoverContent>
                </Popover>
                </Box>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.tgl_transaksi}</Text></Box>
                <Box flex={1}>
                    <Tag colorScheme={
                        it.jenis_transaksi === "masuk" ? "green" :
                        "red"
                    }
                        size={"sm"}>
                        <TagLabel>{it.jenis_transaksi}</TagLabel>
                    </Tag>
                </Box>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.jumlah}</Text></Box>
                <Box flex={1}>
                    { it.status_keluar !== null && (<Tag colorScheme={
                        it.status_keluar === "pinjam" ? "yellow" :
                        it.status_keluar === "dijual" ? "green" :
                        "red"
                    }
                        size={"sm"}>
                        <TagLabel>{it.status_keluar}</TagLabel>
                    </Tag>) }
                </Box>
                <Box flex={1}>
                    <Tag colorScheme={
                        Number(`${it.is_from_change}`) === 1 ? "blue" :
                        Number(`${it.is_closed}`) === 1 ? "green" :
                        "yellow"
                    }
                        size={"sm"}>
                        <TagLabel>{
                            Number(`${it.is_from_change}`) === 1 ? "Perubahan" :
                            Number(`${it.is_closed}`) === 1 ? "Selesai" :
                            "Pending"
                        }</TagLabel>
                    </Tag>    
                </Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        { Number(`${it.is_closed}`) === 0 ? (<Tooltip label='Tutup Transaksi'>
                            <IconButton aria-label={CUtilityString.buttons.action.apply.text} icon={<Icon as={CUtilityString.buttons.action.apply.icon} />}
                                backgroundColor={CUtilityColor.picton}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onClose(it)} />
                            </Tooltip>) : (<Text>-</Text>) }
                    </HStack>
                </Box>
            </HStack>)
        }) : (<Box
        width={"full"}
        borderTop={"1px solid rgba(0,0,0,0.1)"}
        paddingTop={2}>
            <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.used_asset.not_found}</Text>
        </Box>)}
    </Box>)
}

export default VPageDashboardUsedAssetBody