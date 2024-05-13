declare namespace MComponentUsecasePlaceFloor {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiPlaces.ItemFloor[];
        onView: (item: MApiPlaces.ItemFloor) => void;
        onEdit: (item: MApiPlaces.ItemFloor) => void;
        onDelete: (item: MApiPlaces.ItemFloor) => void;
    }

    interface BodyEmbed {
        items: MApiPlaces.ItemFloor[];
    }

    interface BodyChoose {
        items: MApiPlaces.ItemFloor[];
        onChoose: (item: MApiPlaces.ItemFloor) => void;
    }

    interface Field {
        value?: MUsecasePlacesForm.Floor;
        onChange: (value: MUsecasePlacesForm.Floor) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecasePlacesForm.Floor;
        onClick: () => void;
        onChange: (value: MUsecasePlacesForm.Floor) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiPlaces.ItemFloor;
        onClose: () => void;
        onDelete: () => void;
    }
}