import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUserFormPassword: React.FC<MComponentUsecaseUser.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.password.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.password.label}
        </FormLabel>
        <InputGroup>
            <InputLeftElement>
                <Icon as={CUtilityString.forms.password.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputLeftElement>
            <Input type="text" placeholder={CUtilityString.forms.password.placeholder}
                value={value?.password || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            password: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardUserFormPassword