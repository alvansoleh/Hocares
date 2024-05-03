import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardProfileFieldGeneralButton from "./Button"
import VPageDashboardProfileFieldGeneralEmail from "./FieldEmail"
import VPageDashboardProfileFieldGeneralFullname from "./FieldFullname"
import VPageDashboardProfileFieldGeneralPhone from "./FieldPhone"
import VPageDashboardProfileFieldGeneralUsername from "./FieldUsername"

const VPageDashboardProfileFieldGeneral: React.FC<MComponentUsecaseAuthProfile.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardProfileFieldGeneralUsername value={value} onChange={onChange} />
            <VPageDashboardProfileFieldGeneralFullname value={value} onChange={onChange} />
            <VPageDashboardProfileFieldGeneralEmail value={value} onChange={onChange} />
            <VPageDashboardProfileFieldGeneralPhone value={value} onChange={onChange} />
            <VPageDashboardProfileFieldGeneralButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardProfileFieldGeneral