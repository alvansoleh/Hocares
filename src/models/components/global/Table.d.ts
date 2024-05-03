declare namespace MComponentGlobalTable {
    interface Properties {
        title?: string;
        description?: string;
        header?: React.ReactNode;
        body?: React.ReactNode;
        query?: React.ReactNode;
        search?: {
            placeholder?: string;
            onSearch?: (query: string) => void;
            onClick?: () => void;
        };
        action?: {
            label?: string;
            icon?: React.ReactElement;
            onClick?: () => void;
        };
        pagination?: {
            next?: () => void;
            prev?: () => void;
        }
    }
}