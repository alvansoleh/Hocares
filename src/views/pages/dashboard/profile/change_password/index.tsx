import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardProfileFieldChangePasswordPassword from "./FieldPassword"
import VPageDashboardProfileFieldChangePasswordNewPassword from "./FieldNewPassword"
import VPageDashboardProfileFieldChangePasswordRetypePassword from "./FieldRetypePassword"
import VPageDashboardProfileFieldChangePasswordButton from "./Button"

const VPageDashboardProfileFieldChangePassword: React.FC<MComponentUsecaseAuthProfile.ContainerPassword> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardProfileFieldChangePasswordPassword value={value} onChange={onChange} />
            <VPageDashboardProfileFieldChangePasswordNewPassword value={value} onChange={onChange} />
            <VPageDashboardProfileFieldChangePasswordRetypePassword value={value} onChange={onChange} />
            <VPageDashboardProfileFieldChangePasswordButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardProfileFieldChangePassword