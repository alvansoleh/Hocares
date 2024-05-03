declare namespace MComponentUsecaseUsedAsset {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiAssets.ItemUsed[];
        onClose: (item: MApiAssets.ItemUsed) => void;
    }

    interface BodyEmbed {
        items: MApiAssets.ItemUsed[];
    }

    interface BodyChoose {
        items: MApiAssets.ItemUsed[];
        onChoose: (item: MApiAssets.ItemUsed) => void;
    }

    interface Field {
        value?: MUsecaseAssetsForm.AssetUsed;
        onChange: (value: MUsecaseAssetsForm.AssetUsed) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecaseAssetsForm.AssetUsed;
        onClick: () => void;
        onChange: (value: MUsecaseAssetsForm.AssetUsed) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiAssets.ItemUsed;
        onClose: () => void;
        onDelete: () => void;
    }
}