declare namespace MComponentGlobalSearch {
    interface Filter {
        filter_by: string?;
        sort_by: string?;
        query: string?;
        page: number;
        size: number;
        is_apply: boolean;
    }

    interface Container {
        placeholder: string;
        is_can_search?: boolean;
        label?: string;
        onSearch?: (query: string) => void;
    }

    interface Option {
        value: string;
        label: string;
    }

    interface OptionBy {
        options: Option[];
        active_index: number;
        onSelect: (index: number, option: Option) => void
    }

    interface Query {
        filter?: Filter
    }

    interface ContainerQuery {
        isOpen: boolean;
        loading: boolean;
        value?: MComponentGlobalSearch.Filter;
        onClose: () => void;
        onApply: (newValue?: MComponentGlobalSearch.Filter) => void;
    }
}