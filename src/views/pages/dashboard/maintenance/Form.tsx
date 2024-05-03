import { SimpleGrid, TabPanel } from "@chakra-ui/react"
import VPageDashboardMaintenanceFormButton from "./Button"
import { useEffect, useState } from "react"
import { CUtilityString } from "controllers"
import VPageDashboardMaintenanceFormAsset from "./FieldAsset"
import VPageDashboardMaintenanceFormDatetime from "./FieldDatetime"
import VPageDashboardMaintenanceFormNotes from "./FieldNotes"
import VPageDashboardMaintenanceFormStatus from "./FieldStatus"

const VPageDashboardMaintenanceForm: React.FC<MComponentUsecaseMaintenance.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    const [conditionActiveIndex, setStatusActiveIndex] = useState(-1);

    useEffect(() => {
        if (value !== undefined) {
            let tempStatusIndex = -1;
            CUtilityString.forms.status.drop_down.maintenance.forEach((it, i) => {
                if (it.value === value.status) tempStatusIndex = i;
            });
            setStatusActiveIndex(tempStatusIndex)
        }
    }, [value])

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardMaintenanceFormAsset value={value} onChange={onChange} />
            <VPageDashboardMaintenanceFormDatetime value={value} onChange={onChange} />
            <VPageDashboardMaintenanceFormNotes value={value} onChange={onChange} />
            <VPageDashboardMaintenanceFormStatus
                active_index={conditionActiveIndex}
                options={CUtilityString.forms.status.drop_down.maintenance}
                onSelect={(i, option) => {
                    if (value !== undefined) {
                        setStatusActiveIndex(i);
                        onChange({
                            ...value,
                            status: option.value
                        })
                    }
                }} />
            <VPageDashboardMaintenanceFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardMaintenanceForm