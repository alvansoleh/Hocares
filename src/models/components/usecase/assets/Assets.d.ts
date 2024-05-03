declare namespace MComponentUsecaseAsset {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiAssets.Item[];
        onView: (type: "mapping" | "history", item: MApiAssets.Item) => void;
        onDownloadLabel: (item: MApiAssets.Item) => void;
        onEdit: (item: MApiAssets.Item) => void;
        onDelete: (item: MApiAssets.Item) => void;
    }

    interface BodyEmbed {
        items: MApiAssets.Item[];
    }

    interface BodyChoose {
        items: MApiAssets.Item[];
        onChoose: (item: MApiAssets.Item) => void;
    }

    interface Field {
        value?: MUsecaseAssetsForm.Asset;
        onChange: (value: MUsecaseAssetsForm.Asset) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecaseAssetsForm.Asset;
        onClick: () => void;
        onChange: (value: MUsecaseAssetsForm.Asset) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiAssets.Item;
        onClose: () => void;
        onDelete: () => void;
    }
}