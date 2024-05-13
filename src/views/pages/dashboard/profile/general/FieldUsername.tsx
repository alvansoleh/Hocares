import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardProfileFieldGeneralUsername: React.FC<MComponentUsecaseAuthProfile.Field> = ({
    value,
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.username.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.username.label}
        </FormLabel>
        <InputGroup>
            <InputLeftElement>
                <Icon as={CUtilityString.forms.username.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputLeftElement>
            <Input type="text" placeholder={CUtilityString.forms.username.placeholder}
                value={value?.username || ""}
                isDisabled />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardProfileFieldGeneralUsername