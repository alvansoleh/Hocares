import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMaintenanceFormDatetime: React.FC<MComponentUsecaseMaintenance.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.datetime.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.datetime.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.datetime.placeholder}
                value={value?.tanggal_waktu || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        CUtilityString.function.masking_date(e, (newValue) => {
                            onChange({
                                ...value,
                                tanggal_waktu: newValue
                            })
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardMaintenanceFormDatetime