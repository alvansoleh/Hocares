import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardProfileFieldGeneralEmail: React.FC<MComponentUsecaseAuthProfile.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.email.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.email.label}
        </FormLabel>
        <InputGroup>
            <InputLeftElement>
                <Icon as={CUtilityString.forms.email.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputLeftElement>
            <Input type="text" placeholder={CUtilityString.forms.email.placeholder}
                value={value?.email || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            email: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardProfileFieldGeneralEmail