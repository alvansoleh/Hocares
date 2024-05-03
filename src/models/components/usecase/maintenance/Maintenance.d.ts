declare namespace MComponentUsecaseMaintenance {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiMaintenance.Item[];
        onEdit: (item: MApiMaintenance.Item) => void;
        onDelete: (item: MApiMaintenance.Item) => void;
    }

    interface BodyEmbed {
        items: MApiMaintenance.Item[];
    }

    interface Field {
        value?: MUsecaseMaintenanceForm.Schedule;
        onChange: (value: MUsecaseMaintenanceForm.Schedule) => void;
    }

    interface Container {
        mode: "new" | "edit";
        loading: boolean;
        value?: MUsecaseMaintenanceForm.Schedule;
        onClick: () => void;
        onChange: (value: MUsecaseMaintenanceForm.Schedule) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiMaintenance.Item;
        onClose: () => void;
        onDelete: () => void;
    }
}