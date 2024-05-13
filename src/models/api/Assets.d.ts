declare namespace MApiAssets {
    interface ResponseAssetItemINF extends MApiBase.ResponseINF<Item> {
        data: Item[]
    }

    interface ResponseAssetItemUsedINF extends MApiBase.ResponseINF<ItemUsed> {
        data: ItemUsed[]
    }

    interface ResponseAssetItemMappingINF extends MApiBase.ResponseINF<ItemMapping> {
        data: ItemMapping[]
    }

    interface ResponseDetailINF extends MApiBase.ResponseINF<Item> {
        data: Item
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Item {
        id: number;
        nama_aset: string;
        jenis_aset: string;
        nomor_seri: string;
        kondisi: string;
        harga: number;
        jumlah: number;
        is_delete: number;
    }

    interface ItemUsed {
        id: number;
        id_aset: number;
        id_pencatat: number;
        jenis_transaksi: string;
        jumlah: number;
        status_keluar: string?;
        is_closed: number;
        is_from_change: number;
        is_delete: number;
        keterangan: string;
        tgl_transaksi: string;
        nama_aset: string;
        jenis_aset: string;
        nomor_seri: string;
        full_name: string;
    }

    interface ItemMapping {
        id: number;
        id_aset: number;
        id_gedung: number;
        id_lantai: number;
        id_ruangan: number;
        nama_aset: string;
        nama_gedung: string;
        nama_lantai: string;
        nama_ruangan: string;
        is_delete: number;
    }
}