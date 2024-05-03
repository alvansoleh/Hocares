import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardPlaceFloorFormFloorName from "./FieldFloorName"
import VPageDashboardPlaceFloorFormButton from "./Button"

const VPageDashboardPlaceFloorForm: React.FC<MComponentUsecasePlaceFloor.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardPlaceFloorFormFloorName value={value} onChange={onChange} />
            <VPageDashboardPlaceFloorFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardPlaceFloorForm