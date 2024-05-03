import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardUserFormFullName from "./FieldFullName"
import VPageDashboardUserFormButton from "./Button"
import VPageDashboardUserFormUsername from "./FieldUsername"
import VPageDashboardUserFormPassword from "./FieldPassword"
import VPageDashboardUserFormEmail from "./FieldEmail"
import VPageDashboardUserFormPhone from "./FieldPhone"

const VPageDashboardUserForm: React.FC<MComponentUsecaseUser.Container> = ({
    mode,
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardUserFormFullName value={value} onChange={onChange} />
            {mode === "new" && (<VPageDashboardUserFormUsername value={value} onChange={onChange} />)}
            {mode === "new" && (<VPageDashboardUserFormPassword value={value} onChange={onChange} />)}
            <VPageDashboardUserFormEmail value={value} onChange={onChange} />
            <VPageDashboardUserFormPhone value={value} onChange={onChange} />
            <VPageDashboardUserFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardUserForm