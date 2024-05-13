import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardUsedAssetFormQuantity from "./FieldQuantity"
import VPageDashboardUsedAssetFormButton from "./Button"
import { useEffect, useState } from "react";
import { CUtilityString } from "controllers";
import VPageDashboardUsedAssetFormType from "./FieldType";
import VPageDashboardUsedAssetFormNotes from "./FieldNotes";
import VPageDashboardUsedAssetFormStatus from "./FieldStatus";
import VPageDashboardUsedAssetFormAsset from "./FieldAsset";

const VPageDashboardUsedAssetForm: React.FC<MComponentUsecaseUsedAsset.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    const [typeActiveIndex, setTypeActiveIndex] = useState(-1);
    const [statusActiveIndex, setStatusActiveIndex] = useState(-1);

    useEffect(() => {
        if (value !== undefined) {
            let tempTypeIndex = -1, tempStatusIndex = -1;
            CUtilityString.forms.type.drop_down.used_asset.forEach((it, i) => {
                if (it.value === value.jenis_transaksi) tempTypeIndex = i;
            });
            CUtilityString.forms.status.drop_down.used_asset.forEach((it, i) => {
                if (it.value === value.status_keluar) tempStatusIndex = i;
            });
            setTypeActiveIndex(tempTypeIndex)
            setStatusActiveIndex(tempStatusIndex)
        }
    }, [value])

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardUsedAssetFormAsset value={value} onChange={onChange} />
            <VPageDashboardUsedAssetFormType
                active_index={typeActiveIndex}
                options={CUtilityString.forms.type.drop_down.used_asset}
                onSelect={(i, option) => {
                    if (value !== undefined) {
                        setTypeActiveIndex(i);
                        onChange({
                            ...value,
                            jenis_transaksi: option.value,
                            status_keluar: option.value === "masuk" ? null : value.status_keluar
                        })
                    }
                }} />
            { value !== undefined && value.jenis_transaksi === "keluar" && (<VPageDashboardUsedAssetFormStatus
                active_index={statusActiveIndex}
                options={CUtilityString.forms.status.drop_down.used_asset}
                onSelect={(i, option) => {
                    if (value !== undefined) {
                        setStatusActiveIndex(i);
                        onChange({
                            ...value,
                            status_keluar: option.value
                        })
                    }
                }} />) }
            <VPageDashboardUsedAssetFormQuantity value={value} onChange={onChange} />
            <VPageDashboardUsedAssetFormNotes value={value} onChange={onChange} />
            <VPageDashboardUsedAssetFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardUsedAssetForm