import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardAssetFormButton from "./Button"
import VPageDashboardAssetFormAssetName from "./FieldAssetName"
import VPageDashboardAssetFormAssetType from "./FieldAssetType"
import VPageDashboardAssetFormSerialNumber from "./FieldSerialNumber"
import VPageDashboardAssetFormCondition from "./FieldCondition"
import VPageDashboardAssetFormPrice from "./FieldPrice"
import VPageDashboardAssetFormQuantity from "./FieldQuantity"
import { useEffect, useState } from "react"
import { CUtilityString } from "controllers"

const VPageDashboardAssetForm: React.FC<MComponentUsecaseAsset.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    const [conditionActiveIndex, setConditionActiveIndex] = useState(-1);

    useEffect(() => {
        if (value !== undefined) {
            let tempConditionIndex = -1;
            CUtilityString.forms.asset_condition.drop_down.forEach((it, i) => {
                if (it.value === value.kondisi) tempConditionIndex = i;
            });
            setConditionActiveIndex(tempConditionIndex)
        }
    }, [value])

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardAssetFormAssetName value={value} onChange={onChange} />
            <VPageDashboardAssetFormAssetType value={value} onChange={onChange} />
            <VPageDashboardAssetFormSerialNumber value={value} onChange={onChange} />
            <VPageDashboardAssetFormCondition
                active_index={conditionActiveIndex}
                options={CUtilityString.forms.asset_condition.drop_down}
                onSelect={(i, option) => {
                    if (value !== undefined) {
                        setConditionActiveIndex(i);
                        onChange({
                            ...value,
                            kondisi: option.value
                        })
                    }
                }} />
            <VPageDashboardAssetFormPrice value={value} onChange={onChange} />
            <VPageDashboardAssetFormQuantity value={value} onChange={onChange} />
            <VPageDashboardAssetFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardAssetForm