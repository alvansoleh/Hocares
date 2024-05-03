declare namespace MComponentUsecaseUserAccess {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Body {
        items: MApiUserAccess.Item[];
        onWrite: (item: MApiUserAccess.Item) => void;
        onDelete: (item: MApiUserAccess.Item) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiUserAccess.Item;
        onClose: () => void;
        onDelete: () => void;
    }
}