declare namespace MApiReport {
    interface ResponseCountPlaceINF extends MApiBase.ResponseINF<Place> {
        data: Place
    }

    interface ResponseCountAssetINF extends MApiBase.ResponseINF<Asset> {
        data: Asset
    }

    interface ResponseCountAssetTransactionINF extends MApiBase.ResponseINF<AssetTransaction> {
        data: AssetTransaction
    }

    interface ResponseCountScheduleINF extends MApiBase.ResponseINF<Schedule> {
        data: Schedule
    }

    interface Place {
        gedung_count: number;
        lantai_count: number;
        ruangan_count: number;
    }

    interface Asset {
        count_tersedia: number;
        count_tersedia_0: number;
        count_habis: number;
        sum_tersedia: number;
        sum_tersedia_0: number;
        sum_habis: number;
        value_tersedia: number;
        value_tersedia_0: number;
        value_habis: number;
    }

    interface AssetTransaction {
        count_masuk: number;
        count_keluar_rusak: number;
        count_keluar_dijual: number;
        count_keluar_pinjam_open: number;
        count_keluar_pinjam_close: number;
        sum_masuk: number;
        sum_keluar_rusak: number;
        sum_keluar_dijual: number;
        sum_keluar_pinjam_open: number;
        sum_keluar_pinjam_close: number;
    }

    interface Schedule {
        count_terjadwal: number;
        count_berlangsung: number;
        count_selesai: number;
    }
}