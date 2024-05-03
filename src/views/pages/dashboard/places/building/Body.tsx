import { Box, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceBuildingBody: React.FC<MComponentUsecasePlaceBuilding.Body> = ({
    items,
    onDelete,
    onEdit,
    onView
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
                    <HStack width={"full"}>
                        <Tooltip label='Lihat Lantai Pada Gedung'>
                            <IconButton aria-label={CUtilityString.buttons.action.detail.text} icon={<Icon as={CUtilityString.buttons.action.detail.icon} />}
                                backgroundColor={CUtilityColor.picton}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onView(it)} />
                        </Tooltip>
                        <Tooltip label='Ubah Gedung'>
                            <IconButton aria-label={CUtilityString.buttons.action.edit.text} icon={<Icon as={CUtilityString.buttons.action.edit.icon} />}
                                backgroundColor={CUtilityColor.anzac}
                                textColor={CUtilityColor.white}
                                size={"sm"}
                                onClick={() => onEdit(it)} />
                        </Tooltip>
                        <Tooltip label='Hapus Gedung'>
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
                <Text fontSize={14} textColor={CUtilityColor.gray} textAlign={"center"}>{CUtilityString.table.places.building.not_found}</Text>
            </Box>)}
    </Box>)
}

export default VPageDashboardPlaceBuildingBody