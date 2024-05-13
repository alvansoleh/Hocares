import { useState } from "react";

const LUsecaseMaintenance = () => {
    // Setup List
    const [maintenanceId, setMaintenanceId] = useState<number>();
    const [maintenanceList, setMaintenanceList] = useState<MApiMaintenance.Item[]>([]);
    const [maintenanceDetail, setMaintenanceDetail] = useState<MApiMaintenance.Item>();
    const [formMaintenanceDetail, setFormMaintenanceDetail] = useState<MUsecaseMaintenanceForm.Schedule>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingMaintenance, setIsLoadingMaintenance] = useState(false);

    // Export Function
    return {
        maintenanceId,
        maintenanceList,
        maintenanceDetail,
        formMaintenanceDetail,
        formFilter,
        isLoadingMaintenance,

        setMaintenanceId,
        setMaintenanceList,
        setMaintenanceDetail,
        setFormMaintenanceDetail,
        setFormFilter,
        setIsLoadingMaintenance,
    }
}

export default LUsecaseMaintenance