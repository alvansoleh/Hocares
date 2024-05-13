import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardPlaceRoomFormRoomName: React.FC<MComponentUsecasePlaceRoom.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.room_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.room_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.room_name.placeholder}
                value={value?.nama_ruangan || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            nama_ruangan: e.target.value
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardPlaceRoomFormRoomName