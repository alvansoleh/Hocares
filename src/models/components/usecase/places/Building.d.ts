declare namespace MComponentUsecasePlaceBuilding {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiPlaces.ItemBuilding[];
        onView: (item: MApiPlaces.ItemBuilding) => void;
        onEdit: (item: MApiPlaces.ItemBuilding) => void;
        onDelete: (item: MApiPlaces.ItemBuilding) => void;
    }

    interface BodyEmbed {
        items: MApiPlaces.ItemBuilding[];
    }

    interface BodyChoose {
        items: MApiPlaces.ItemBuilding[];
        onChoose: (item: MApiPlaces.ItemBuilding) => void;
    }

    interface Field {
        value?: MUsecasePlacesForm.Building;
        onChange: (value: MUsecasePlacesForm.Building) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecasePlacesForm.Building;
        onClick: () => void;
        onChange: (value: MUsecasePlacesForm.Building) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiPlaces.ItemBuilding;
        onClose: () => void;
        onDelete: () => void;
    }
}