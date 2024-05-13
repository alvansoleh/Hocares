declare namespace MUsecasePlacesForm {
    interface Building {
        nama_gedung: string;
    }

    interface Floor {
        nama_lantai: string;
        gedung_id: number;
    }

    interface Room {
        nama_ruangan: string;
        lantai_id: number;
    }
}