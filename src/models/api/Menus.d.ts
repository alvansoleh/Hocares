declare namespace MApiMenus {
    interface ResponseINF extends MApiBase.ResponseINF<Item> {
        data: Item[]
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Item {
        id: string;
        nama_menu: string;
        path: string;
        icon: string?;
        is_delete: string;
    }
}