import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUserFormPhone: React.FC<MComponentUsecaseUser.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.phone.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.phone.label}
        </FormLabel>
        <InputGroup>
            <InputLeftElement>
                <Icon as={CUtilityString.forms.phone.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputLeftElement>
            <Input type="text" placeholder={CUtilityString.forms.phone.placeholder}
                value={value?.no_hp || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            no_hp: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardUserFormPhone