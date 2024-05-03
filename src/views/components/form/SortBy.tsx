import { FormControl, FormLabel, Select } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VComponentFormSortBy: React.FC<MComponentGlobalSearch.OptionBy> = ({
    active_index,
    options,
    onSelect
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.sort_by.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.sort_by.label}
        </FormLabel>
        {active_index > -1 ? (<Select placeholder={CUtilityString.forms.sort_by.placeholder}
            value={ active_index }
            onChange={(e) => {
                if (e.target.value.length > 0) {
                    const i = Number(e.target.value);
                    onSelect(i, options[i]);
                }
            }}>
            { options.map((it, i) => {
                return (<option
                    key={`sort_by-item-${i}`} value={i}>{it.label}</option>)
            }) }
        </Select>) : (<Select placeholder={CUtilityString.forms.sort_by.placeholder}
            onChange={(e) => {
                if (e.target.value.length > 0) {
                    const i = Number(e.target.value);
                    onSelect(i, options[i]);
                }
            }}>
            { options.map((it, i) => {
                return (<option
                    key={`sort_by-item-${i}`} value={i}>{it.label}</option>)
            }) }
        </Select>)}
    </FormControl>)
}

export default VComponentFormSortBy