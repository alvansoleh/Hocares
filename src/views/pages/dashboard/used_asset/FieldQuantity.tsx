import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageDashboardUsedAssetFormQuantity: React.FC<MComponentUsecaseUsedAsset.Field> = ({
    value,
    onChange
}): JSX.Element => {

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.quantity.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.quantity.label}
        </FormLabel>
        <InputGroup>
            <Input type="text" placeholder={CUtilityString.forms.quantity.placeholder}
                value={value?.jumlah || ""}
                onChange={(e) => {
                    if (value !== undefined && onChange !== undefined) {
                        onChange({
                            ...value,
                            jumlah: Number(e.target.value)
                        })
                    }
                }} />
        </InputGroup>
    </FormControl>)
}

export default VPageDashboardUsedAssetFormQuantity