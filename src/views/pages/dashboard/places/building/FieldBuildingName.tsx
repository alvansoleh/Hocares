import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceBuildingFormBuildingName: React.FC<MComponentUsecasePlaceBuilding.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.building_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.building_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.building_name.placeholder}
                value={value?.nama_gedung || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            nama_gedung: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardPlaceBuildingFormBuildingName