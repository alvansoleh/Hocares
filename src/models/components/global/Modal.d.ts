declare namespace MComponentGlobalModal {
    interface Properties {
        title?: string;
        description?: string;
        trigger?: JSX.Element;
        content?: JSX.Element;
    }

    interface ModalProperties {
        isOpen: boolean;
        title?: string;
        size: "xs" | "sm" | "md" | "lg" | "2xl" | "4xl" | "full";
        content?: JSX.Element;
        footer?: JSX.Element;
        onClose: () => void;
    }
}