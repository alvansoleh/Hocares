import { Box, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMappingAssetBody: React.FC<MComponentUsecaseMappingAsset.Body> = ({
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
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_gedung}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_lantai}</Text></Box>
                <Box flex={2}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_ruangan}</Text></Box>
                <Box flex={1}>
                    <HStack width={"full"}>
                        <Tooltip label='Hapus Kaitan Aset'>
                            <IconButton aria-label={CUtilityString.buttons.action.delete.text} icon={<Icon as={CUtilityString.buttons.action.delete.icon} />}
                                backgroundColor={CUtilityColor.rojo}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onClose(it)} />
                        </Tooltip>
                    </HStack>
                </Box>
            </HStack>)
        }) : (<Box
        width={"full"}
        borderTop={"1px solid rgba(0,0,0,0.1)"}
        paddingTop={2}>
            <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.mapping_asset.not_found}</Text>
        </Box>)}
    </Box>)
}

export default VPageDashboardMappingAssetBody