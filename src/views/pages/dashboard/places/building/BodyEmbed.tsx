import { Box, HStack, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceBuildingBodyEmbed: React.FC<MComponentUsecasePlaceBuilding.BodyEmbed> = ({
    items,
}): JSX.Element => {

    return (<Box width={"full"}>
        {items.length > 0 ? items.map((it, i) => {
            return (<HStack key={`building-item-${i}`}
                width={"full"}
                borderTop={"1px solid rgba(0,0,0,0.1)"}
                paddingTop={2}
                paddingBottom={2}>
                <Box flex={1}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.id}</Text></Box>
                <Box flex={4}><Text fontSize={14} textColor={CUtilityColor.gray}>{it.nama_gedung}</Text></Box>
                <Box flex={1}>
                    <Text>-</Text>
                </Box>
            </HStack>)
        }) : (<Box
            width={"full"}
            borderTop={"1px solid rgba(0,0,0,0.1)"}
            paddingTop={2}>
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.places.building.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardPlaceBuildingBodyEmbed