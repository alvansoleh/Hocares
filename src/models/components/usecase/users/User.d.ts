declare namespace MComponentUsecaseUser {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiUser.Item[];
        onManage: (item: MApiUser.Item) => void;
        onEdit: (item: MApiUser.Item) => void;
        onDelete: (item: MApiUser.Item) => void;
    }

    interface Field {
        value?: MUsecaseUserForm.User;
        onChange: (value: MUsecaseUserForm.User) => void;
    }

    interface Container {
        mode: "new" | "edit";
        loading: boolean;
        value?: MUsecaseUserForm.User;
        onClick: () => void;
        onChange: (value: MUsecaseUserForm.User) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiUser.Item;
        onClose: () => void;
        onDelete: () => void;
    }
}