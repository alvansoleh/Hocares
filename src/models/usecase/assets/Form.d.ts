declare namespace MUsecaseAssetsForm {
    interface Asset {
        nama_aset: string;
        jenis_aset: string;
        nomor_seri: string;
        kondisi: string;
        harga: number;
        jumlah: number;
    }

    interface AssetUsed {
        id_aset: number;
        id_pencatat: number;
        jenis_transaksi: string;
        jumlah: number;
        status_keluar: string?;
        keterangan: string;
    }

    interface CloseUsed {
        id_transaction: number;
    }

    interface AssetMapping {
        id_aset: number;
        id_gedung: number;
        id_lantai?: number;
        id_ruangan?: number;
    }
}