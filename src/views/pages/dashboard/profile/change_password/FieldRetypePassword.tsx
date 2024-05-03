import { FormControl, FormLabel, Icon, Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"
import { LUsecaseAuthProfile } from "logics";

const VPageDashboardProfileFieldChangePasswordRetypePassword: React.FC<MComponentUsecaseAuthProfile.FieldPassword> = ({
    value,
    onChange
}): JSX.Element => {

    const { isShowPassword, setIsShowPassword } = LUsecaseAuthProfile();

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.password.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            Ulangi {CUtilityString.forms.password.label} Baru
        </FormLabel>
        <InputGroup>
            <InputLeftElement>
                <Icon as={CUtilityString.forms.password.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputLeftElement>
            <Input type={isShowPassword ? "text" : "password"} placeholder={CUtilityString.forms.password.placeholder}
                value={value?.retype_password}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            retype_password: e.target.value
                        })
                    }
                }} />
            <InputRightAddon onClick={() => {
                setIsShowPassword(isShowPassword ? false : true);
            }}>
                <Icon as={isShowPassword ? CUtilityString.forms.eye_close.icon : CUtilityString.forms.eye_open.icon} fontSize={16} textColor={CUtilityColor.federal} />
            </InputRightAddon>
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardProfileFieldChangePasswordRetypePassword