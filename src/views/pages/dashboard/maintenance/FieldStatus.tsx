import { FormControl, FormLabel, Select } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardMaintenanceFormStatus: React.FC<MComponentGlobalSearch.OptionBy> = ({
    active_index,
    options,
    onSelect
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.status.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.status.label}
        </FormLabel>
        { active_index > -1 ? (<Select placeholder={CUtilityString.forms.status.placeholder}
            value={ active_index }
            onChange={(e) => {
                if (e.target.value.length > 0) {
                    const i = Number(e.target.value);
                    onSelect(i, options[i]);
                }
            }}>
            { options.map((it, i) => {
                return (<option
                    key={`status-item-${i}`} value={i}>{it.label}</option>)
            }) }
        </Select>) : (<Select placeholder={CUtilityString.forms.status.placeholder}
            onChange={(e) => {
                if (e.target.value.length > 0) {
                    const i = Number(e.target.value);
                    onSelect(i, options[i]);
                }
            }}>
            { options.map((it, i) => {
                return (<option
                    key={`status-item-${i}`} value={i}>{it.label}</option>)
            }) }
        </Select>) }
    </FormControl>)
}

export default VPageDashboardMaintenanceFormStatus