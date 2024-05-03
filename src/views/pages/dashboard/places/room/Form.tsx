import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardPlaceRoomFormRoomName from "./FieldRoomName"
import VPageDashboardPlaceRoomFormButton from "./Button"

const VPageDashboardPlaceRoomForm: React.FC<MComponentUsecasePlaceRoom.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardPlaceRoomFormRoomName value={value} onChange={onChange} />
            <VPageDashboardPlaceRoomFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardPlaceRoomForm