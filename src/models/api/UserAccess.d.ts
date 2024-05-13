declare namespace MApiUserAccess {
    interface ResponseINF extends MApiBase.ResponseINF<Item> {
        data: Item[]
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Item {
        id: string;
        id_user: string;
        id_menu: string;
        nama_menu: string;
        path: string;
        full_name: string;
        lihat: string;
        tambah: string;
        ubah: string;
        hapus: string;
        is_delete: string;
    }
}