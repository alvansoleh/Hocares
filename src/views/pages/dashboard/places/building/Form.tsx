import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardPlaceBuildingFormBuildingName from "./FieldBuildingName"
import VPageDashboardPlaceBuildingFormButton from "./Button"

const VPageDashboardPlaceBuildingForm: React.FC<MComponentUsecasePlaceBuilding.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardPlaceBuildingFormBuildingName value={value} onChange={onChange} />
            <VPageDashboardPlaceBuildingFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardPlaceBuildingForm