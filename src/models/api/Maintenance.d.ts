declare namespace MApiMaintenance {
    interface ResponseINF extends MApiBase.ResponseINF<Item> {
        data: Item[]
    }

    interface ResponseDetailINF extends MApiBase.ResponseINF<Item> {
        data: Item
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Item {
        id: number;
        id_aset: number;
        id_pencatat: number;
        full_name: string;
        nama_aset: string;
        tanggal_waktu: string;
        catatan: string;
        status: string;
        is_delete: number;
    }
}