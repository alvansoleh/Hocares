import { Box, HStack, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceRoomHead: React.FC = (): JSX.Element => {

    return (<HStack width={"full"}
        borderTop={"1px solid rgba(0,0,0,0.1)"}
        paddingTop={4}>
            {CUtilityString.table.places.room.head.map((it, i) => {
                return (<Box key={`room-head-item-${i}`} flex={it.flex}><Text fontSize={14} fontWeight={"semibold"} textColor={CUtilityColor.gray}>{it.label}</Text></Box>)
            })}
    </HStack>)
}

export default VPageDashboardPlaceRoomHead