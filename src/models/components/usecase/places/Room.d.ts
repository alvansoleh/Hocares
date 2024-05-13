declare namespace MComponentUsecasePlaceRoom {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Query {
        filter?: MComponentGlobalSearch.Filter
    }

    interface Body {
        items: MApiPlaces.ItemRoom[];
        onEdit: (item: MApiPlaces.ItemRoom) => void;
        onDelete: (item: MApiPlaces.ItemRoom) => void;
    }

    interface BodyEmbed {
        items: MApiPlaces.ItemRoom[];
    }

    interface BodyChoose {
        items: MApiPlaces.ItemRoom[];
        onChoose: (item: MApiPlaces.ItemRoom) => void;
    }

    interface Field {
        value?: MUsecasePlacesForm.Room;
        onChange: (value: MUsecasePlacesForm.Room) => void;
    }

    interface Container {
        loading: boolean;
        value?: MUsecasePlacesForm.Room;
        onClick: () => void;
        onChange: (value: MUsecasePlacesForm.Room) => void;
    }

    interface Delete {
        isOpen: boolean;
        loading: boolean;
        value?: MApiPlaces.ItemRoom;
        onClose: () => void;
        onDelete: () => void;
    }
}