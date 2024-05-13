declare namespace MComponentUsecaseMenu {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface BodyEmbed {
        items: MApiMenus.Item[];
        onChoose: (item: MApiMenus.Item) => void;
    }
}