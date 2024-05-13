import { Box, HStack, Tag, TagLabel, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardAssetBodyEmbed: React.FC<MComponentUsecaseAsset.BodyEmbed> = ({
    items,
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
                    <Text>-</Text>
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

export default VPageDashboardAssetBodyEmbed