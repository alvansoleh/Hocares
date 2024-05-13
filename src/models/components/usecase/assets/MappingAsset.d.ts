declare namespace MComponentUsecaseMappingAsset {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiAssets.ItemMapping[];
        onClose: (item: MApiAssets.ItemMapping) => void;
    }

    interface BodyChoose {
        items: MApiAssets.ItemMapping[];
        onChoose: (item: MApiAssets.ItemMapping) => void;
    }

    interface Field {
        value?: MUsecaseAssetsForm.AssetMapping;
        onChange: (value: MUsecaseAssetsForm.AssetMapping) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecaseAssetsForm.AssetMapping;
        onClick: () => void;
        onChange: (value: MUsecaseAssetsForm.AssetMapping) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiAssets.ItemMapping;
        onClose: () => void;
        onDelete: () => void;
    }
}