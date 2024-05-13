import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceFloorFormFloorName: React.FC<MComponentUsecasePlaceFloor.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.floor_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.floor_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.floor_name.placeholder}
                value={value?.nama_lantai || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            nama_lantai: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardPlaceFloorFormFloorName