import { FiChevronLeft, FiCircle, FiClock, FiDownload, FiEdit, FiEye, FiEyeOff, FiFilter, FiLock, FiLogIn, FiLogOut, FiPhone, FiPrinter, FiRewind, FiSave, FiSend, FiTrash, FiUser } from "react-icons/fi"

const LocalStorage = `${process.env.REACT_APP_STORAGE}`;
const baseURL = `${process.env.REACT_APP_API_BASE_URL}`;

const CUtilityString = {
    text: {
        loading: "Sedang memuat ...",
        forgot_password: "Lupa kata sandi?",
        filter: "Filter Kata Kunci: ",
        filter_by: "Filter Berdasarkan ",
        sort_by: "Urutkan Berdasarkan ",
        query: "Kata Kunci ",
    },
    messages: {
        dashboard: {
            places: {
                building: {
                    delete: (building_name: string) => `Apakah Anda yakin ingin menghapus <strong>${building_name}</strong>?`,
                    choose: `Silakan pilih gedung terlebih dahulu`,
                },
                floor: {
                    delete: (floor_name: string) => `Apakah Anda yakin ingin menghapus <strong>${floor_name}</strong>?`,
                    choose: `Silakan pilih lantai terlebih dahulu`,
                },
                room: {
                    delete: (room_name: string) => `Apakah Anda yakin ingin menghapus <strong>${room_name}</strong>?`,
                },
            },
            user:{
                delete: (full_name: string) => `Apakah Anda yakin ingin menghapus <strong>${full_name}</strong>?`,
            },
            user_access:{
                delete: (menu_id: string) => `Apakah Anda yakin ingin menghapus <strong>${menu_id}</strong>?`,
            },
            asset:{
                delete: (asset_name: string) => `Apakah Anda yakin ingin menghapus <strong>${asset_name}</strong>?`,
            },
            maintenance:{
                delete: (schedule_id: number) => `Apakah Anda yakin ingin menghapus <strong>${schedule_id}</strong>?`,
            },
            used_asset:{
                close: (trx_id: number) => `Apakah Anda yakin ingin menutup <strong>${trx_id}</strong>?`,
            },
            mapping_asset:{
                close: (trx_id: number) => `Apakah Anda yakin ingin menghapus <strong>${trx_id}</strong>?`,
            },
        }
    },
    title: {
        app: "HOCARES",
        home: "Beranda - HOCARES",
        auth: {
            sign_in: "Masuk - HOCARES"
        },
        dashboard: {
            index: "Dashboard - HOCARES",
            profile: "Profil - HOCARES",
            user: {
                list: "Kelola Pengguna - HOCARES",
                new: "Tambah Pengguna Baru - HOCARES",
                edit: "Ubah Pengguna - HOCARES",
                delete: "Hapus Pengguna - HOCARES",
                filter: "Filter Pengguna - HOCARES",
            },
            user_access: {
                list: "Kelola Akses Pengguna - HOCARES",
                new: "Tambah Akses Baru - HOCARES",
                delete: "Hapus Akses Pengguna - HOCARES",
            },
            menus: {
                list: "Kelola Menu - HOCARES",
                new: "Tambah Menu Baru - HOCARES",
                delete: "Hapus Menu - HOCARES",
            },
            asset: {
                list: "Kelola Aset - HOCARES",
                new: "Tambah Aset Baru - HOCARES",
                edit: "Ubah Aset - HOCARES",
                delete: "Hapus Aset - HOCARES",
                filter: "Filter Aset - HOCARES",
            },
            used_asset: {
                list: "Kelola Aset Terpakai - HOCARES",
                new: "Tambah Aset Terpakai - HOCARES",
                new_in: "Tambah Aset Masuk - HOCARES",
                new_out: "Tambah Aset Keluar - HOCARES",
                delete: "Selesaikan Aset Keluar - HOCARES",
                filter: "Filter Aset Terpakai - HOCARES",
            },
            mapping_asset: {
                list: "Kelola Lokasi Aset - HOCARES",
                new: "Tambah Lokasi Aset - HOCARES",
                delete: "Hapus Lokasi Aset Out - HOCARES",
                filter: "Filter Lokasi Aset - HOCARES",
            },
            places: {
                building: {
                    list: "Kelola Gedung - HOCARES",
                    new: "Tambah Gedung - HOCARES",
                    edit: "Ubah Gedung - HOCARES",
                    delete: "Hapus Gedung - HOCARES",
                    filter: "Filter Gedung - HOCARES",
                },
                floor: {
                    list: "Kelola Lantai - HOCARES",
                    new: "Tambah Lantai - HOCARES",
                    edit: "Ubah Lantai - HOCARES",
                    delete: "Hapus Lantai - HOCARES",
                    filter: "Filter Lantai - HOCARES",
                },
                room: {
                    list: "Kelola Ruangan - HOCARES",
                    new: "Tambah Ruangan - HOCARES",
                    edit: "Ubah Ruangan - HOCARES",
                    delete: "Hapus Ruangan - HOCARES",
                    filter: "Filter Ruangan - HOCARES",
                },
            },
            assets: {
                general: {
                    list: "Kelola Aset - HOCARES",
                    new: "Tambah Aset - HOCARES",
                    edit: "Ubah Aset - HOCARES",
                    delete: "Hapus Aset - HOCARES",
                },
                used: {
                    list: "Kelola Aset Terpakai - HOCARES",
                    in: "Tambah Aset Masuk - HOCARES",
                    out: "Tambah Aset Keluar - HOCARES",
                    close: "Selesaikan Aset Keluar - HOCARES",
                },
            },
            maintenance: {
                list: "Jadwal Pemeliharaan - HOCARES",
                new: "Tambah Jadwal Pemeliharaan - HOCARES",
                edit: "Ubah Jadwal Pemeliharaan - HOCARES",
                delete: "Hapus Jadwal Pemeliharaan - HOCARES",
                filter: "Filter Jadwal Pemeliharaan - HOCARES",
            },
            report: {
                place: {
                    building: "Laporan Gedung",
                    floor: "Laporan Lantai",
                    room: "Laporan Ruangan",
                },
                asset: (mode: number) => {
                    if (mode === 0) {
                        return "Laporan Aset Tersedia"
                    }
                    else if (mode === 1) {
                        return "Laporan Aset Habis"
                    }
                    else if (mode === 2) {
                        return "Laporan Nilai Aset Tersedia"
                    }
                    else if (mode === 3) {
                        return "Laporan Nilai Aset Habis"
                    }
                    else return "Laporan Aset"
                },
                used_asset: (mode: number) => {
                    if (mode === 0) {
                        return "Laporan Transaksi Masuk"
                    }
                    else if (mode === 1) {
                        return "Laporan Transaksi Keluar Karena Dijual"
                    }
                    else if (mode === 2) {
                        return "Laporan Transaksi Keluar Karena Rusak"
                    }
                    else if (mode === 3) {
                        return "Laporan Transaksi Keluar Sedang Dipinjam"
                    }
                    return "Laporan Transaksi Keluar Telah Dikembalikan"
                },
                maintenance: (mode: number) => {
                    if (mode === 0) {
                        return "Laporan Jadwal Pemeliharaan"
                    }
                    else if (mode === 1) {
                        return "Laporan Pemeliharaan Sedang Berlangsung"
                    }
                    else if (mode === 2) {
                        return "Laporan Pemeliharaan Selesai"
                    }
                    return "Laporan Pemeliharaan Selesai"
                }
            }
        }
    },
    table: {
        user: {
            title: "Daftar Pengguna",
            description: "Kelola pengguna",
            search: "Cari pengguna ...",
            new: "Tambah Pengguna",
            head: [
                { flex: 1, label: "ID Pengguna" },
                { flex: 2, label: "Nama Lengkap" },
                { flex: 2, label: "Username" },
                { flex: 2, label: "Email" },
                { flex: 2, label: "No Telepon" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Pengguna tidak ditemukan"
        },
        menus: {
            title: "Daftar Menu",
            description: "Kelola Menu",
            head: [
                { flex: 1, label: "ID Menu" },
                { flex: 2, label: "Nama Menu" },
                { flex: 2, label: "Path" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Menu tidak ditemukan"
        },
        user_access: {
            title: "Daftar Akses Pengguna",
            description: "Kelola Akses Pengguna",
            new: "Tambah Akses Pengguna",
            head: [
                { flex: 2, label: "Nama Menu" },
                { flex: 2, label: "Nama Pengguna" },
                { flex: 1, label: "Lihat" },
                { flex: 1, label: "Tambah" },
                { flex: 1, label: "Ubah" },
                { flex: 1, label: "Hapus" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Akses Pengguna tidak ditemukan"
        },
        asset: {
            title: "Daftar Aset",
            description: "Kelola aset",
            search: "Cari aset...",
            new: "Tambah Aset",
            head: [
                { flex: 1, label: "ID Aset" },
                { flex: 2, label: "Nama Aset" },
                { flex: 1, label: "Jenis" },
                { flex: 2, label: "Nomor Seri" },
                { flex: 1, label: "Kondisi" },
                { flex: 1, label: "Harga" },
                { flex: 1, label: "Jumlah" },
                { flex: 2, label: "Aksi" },
            ],
            not_found: "Data dari Aset tidak ditemukan"
        },
        used_asset: {
            title: "Daftar Aset Terpakai",
            description: "Kelola aset terpakai",
            search: "Cari aset terpakai ...",
            new: "Tambah Aset Terpakai",
            head: [
                { flex: 1, label: "ID TRX" },
                { flex: 2, label: "Aset Nama" },
                { flex: 2, label: "Pengguna" },
                { flex: 1, label: "Catatan" },
                { flex: 1, label: "Tanggal & Waktu" },
                { flex: 1, label: "Jenis" },
                { flex: 1, label: "Jumlah" },
                { flex: 1, label: "Alasan Keluar" },
                { flex: 1, label: "Status TRX" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Aset Terpakai tidak ditemukan"
        },
        mapping_asset: {
            title: "Daftar Lokasi Aset",
            description: "Kelola lokasi aset",
            search: "Cari lokasi aset...",
            new: "Tambah Lokasi Aset",
            head: [
                { flex: 1, label: "ID Lokasi" },
                { flex: 2, label: "Nama Aset" },
                { flex: 2, label: "Nama Gedung" },
                { flex: 2, label: "Nama Lantai" },
                { flex: 2, label: "Nama Ruangan" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Lokasi Aset tidak ditemukan"
        },
        places: {
            building: {
                title: "Daftar Gedung",
                description: "Kelola gedung",
                search: "Cari gedung ...",
                new: "Tambah Gedung",
                head: [
                    { flex: 1, label: "ID Gedung" },
                    { flex: 4, label: "Nama Gedung" },
                    { flex: 1, label: "Aksi" },
                ],
                not_found: "Data dari Gedung tidak ditemukan"
            },
            floor: {
                title: "Daftar Gedung Lantai",
                description: "Kelola gedung lantai",
                search: "Cari gedung lantai ...",
                new: "Tambah Lantai",
                head: [
                    { flex: 1, label: "ID Lantai" },
                    { flex: 2, label: "Nama Gedung" },
                    { flex: 2, label: "Nama Lantai" },
                    { flex: 1, label: "Aksi" },
                ],
                not_found: "Data dari Lantai tidak ditemukan"
            },
            room: {
                title: "Daftar Lantai Ruangan",
                description: "Kelola lantai ruangan",
                search: "Cari lantai ruangan ...",
                new: "Tambah Ruangan",
                head: [
                    { flex: 1, label: "ID Ruangan" },
                    { flex: 2, label: "Nama Gedung" },
                    { flex: 2, label: "Nama Lantai" },
                    { flex: 2, label: "Nama Ruangan" },
                    { flex: 1, label: "Aksi" },
                ],
                not_found: "Data dari Ruangan tidak ditemukan"
            }
        },
        maintenance: {
            title: "Daftar Jadwal Pemeliharaan",
            description: "Kelola jadwal pemeliharaan",
            search: "Cari jadwal pemeliharaan ...",
            new: "Tambah Jadwal Pemeliharaan",
            head: [
                { flex: 1, label: "ID Jadwal" },
                { flex: 2, label: "Nama Aset" },
                { flex: 2, label: "Pengguna" },
                { flex: 2, label: "Tanggal & Waktu" },
                { flex: 1, label: "Catatan" },
                { flex: 1, label: "Status" },
                { flex: 1, label: "Aksi" },
            ],
            not_found: "Data dari Pengguna tidak ditemukan"
        },
    },
    forms: {
        username: {
            is_required: true,
            label: "Username",
            placeholder: "Isi username disini",
            icon: FiUser,
        },
        full_name: {
            is_required: true,
            label: "Nama Lengkap",
            placeholder: "Isi nama lengkap disini",
            icon: null,
        },
        email: {
            is_required: true,
            label: "Email",
            placeholder: "Isi email disini",
            icon: FiSend,
        },
        phone: {
            is_required: true,
            label: "No Telepon Number",
            placeholder: "Isi no telepon disini",
            icon: FiPhone,
        },
        password: {
            is_required: true,
            label: "Password",
            placeholder: "Isi password yang aman disini",
            icon: FiLock,
        },
        eye_open: {
            is_required: true,
            label: "Lihat",
            placeholder: "Isi lihat disini",
            icon: FiEye,
        },
        eye_close: {
            is_required: true,
            label: "Sembunyikan",
            placeholder: "Isi sembunyikan disini",
            icon: FiEyeOff,
        },
        building_name: {
            is_required: true,
            label: "Nama Gedung",
            placeholder: "Isi nama gedung disini",
            icon: null,
        },
        floor_name: {
            is_required: true,
            label: "Nama Lantai",
            placeholder: "Isi nama lantai disini",
            icon: null,
        },
        room_name: {
            is_required: true,
            label: "Nama Ruangan",
            placeholder: "Isi nama ruangan disini",
            icon: null,
        },
        filter_by: {
            is_required: false,
            label: "Filter Berdasarkan",
            placeholder: "Pilih salah satu dari",
            icon: null,
            drop_down: {
                user: [
                    { value: "id", label: "ID Pengguna" },
                    { value: "full_name", label: "Nama Lengkap" },
                    { value: "username", label: "Username" },
                    { value: "email", label: "Email" },
                    { value: "no_hp", label: "No Telepon" },
                ],
                asset: [
                    { value: "id", label: "ID Aset" },
                    { value: "nama_aset", label: "Nama Aset" },
                    { value: "jenis_aset", label: "Jenis Aset" },
                    { value: "nomor_seri", label: "Nomor Seri" },
                    { value: "kondisi", label: "Kondisi" },
                    { value: "harga", label: "Harga" },
                    { value: "jumlah", label: "Jumlah" },
                ],
                used_asset: [
                    { value: "nama_aset", label: "Nama Aset" },
                    { value: "id", label: "ID TRX" },
                    { value: "full_name", label: "Pengguna" },
                    { value: "nama_lantai", label: "Nama Lantai" },
                    { value: "jenis_transaksi", label: "Jenis" },
                    { value: "jumlah", label: "Jumlah" },
                    { value: "status_keluar", label: "Status Keluar" },
                    { value: "is_closed", label: "Sudah Selesai?" },
                ],
                mapping_asset: [
                    { value: "nama_aset", label: "Nama Aset" },
                    { value: "id", label: "ID TRX" },
                    { value: "nama_gedung", label: "Nama Gedung" },
                    { value: "nama_lantai", label: "Nama Lantai" },
                    { value: "nama_ruangan", label: "Nama Ruangan" },
                ],
                maintenance: [
                    { value: "id", label: "ID Jadwal" },
                    { value: "nama_aset", label: "Nama Aset" },
                    { value: "full_name", label: "Pengguna" },
                    { value: "tanggal_waktu", label: "Tanggal & Waktu" },
                    { value: "status", label: "Status" },
                ],
                building: [
                    { value: "id", label: "ID Gedung" },
                    { value: "nama_gedung", label: "Nama Gedung" },
                ],
                floor: [
                    { value: "id_gedung", label: "ID Gedung" },
                    { value: "id", label: "ID Lantai" },
                    { value: "nama_gedung", label: "Nama Gedung" },
                    { value: "nama_lantai", label: "Nama Lantai" },
                ],
                room: [
                    { value: "id_gedung", label: "ID Gedung" },
                    { value: "id_lantai", label: "ID Lantai" },
                    { value: "id", label: "ID Ruangan" },
                    { value: "nama_gedung", label: "Nama Gedung" },
                    { value: "nama_lantai", label: "Nama Lantai" },
                    { value: "nama_ruangan", label: "Nama Ruangan" },
                ]
            }
        },
        sort_by: {
            is_required: false,
            label: "Urutkan Berdasarkan",
            placeholder: "Pilih salah satu dari",
            icon: null,
            drop_down: [
                { value: "ASC", label: "Naik" },
                { value: "DESC", label: "Menurun" },
            ]
        },
        query: {
            is_required: false,
            label: "Query",
            placeholder: "Cari sesuatu ...",
            icon: null,
        },
        asset_name: {
            is_required: true,
            label: "Nama Aset",
            placeholder: "Isi nama aset disini",
            icon: null,
        },
        asset_type: {
            is_required: true,
            label: "Jenis Aset",
            placeholder: "Isi jenis aset disini",
            icon: null,
        },
        serial_number: {
            is_required: true,
            label: "Nomor Seri",
            placeholder: "Isi nomor seri disini",
            icon: null,
        },
        asset_condition: {
            is_required: true,
            label: "Aset Kondisi",
            placeholder: "Pilih salah satu dari",
            icon: null,
            drop_down: [
                { value: "tersedia", label: "Tersedia" },
                { value: "habis", label: "Habis" },
            ]
        },
        price: {
            is_required: true,
            label: "Harga",
            placeholder: "Isi harga disini",
            icon: null,
        },
        quantity: {
            is_required: true,
            label: "Jumlah",
            placeholder: "Isi jumlah disini",
            icon: null,
        },
        datetime: {
            is_required: true,
            label: "Tanggal & Waktu",
            placeholder: "YYYY-MM-DD HH:II",
            icon: null,
        },
        notes: {
            is_required: false,
            label: "Catatan",
            placeholder: "Isi catatan disini",
            icon: null,
        },
        status: {
            is_required: true,
            label: "Status",
            placeholder: "Pilih salah satu dari",
            icon: null,
            drop_down: {
                maintenance: [
                    { value: "terjadwal", label: "Terjadwal" },
                    { value: "berlangsung", label: "Berlangsung" },
                    { value: "selesai", label: "Selesai" },
                ],
                used_asset: [
                    { value: "rusak", label: "Rusak" },
                    { value: "pinjam", label: "Dipinjam" },
                    { value: "dijual", label: "Dijual" },
                ]
            }
        },
        type: {
            is_required: true,
            label: "Jenis",
            placeholder: "Pilih salah satu dari",
            icon: null,
            drop_down: {
                used_asset: [
                    { value: "masuk", label: "Masuk" },
                    { value: "keluar", label: "Keluar" },
                ]
            }
        },
    },
    buttons: {
        action: {
            detail: {
                text: "Lihat Detail",
                icon: FiEye
            },
            label: {
                text: "Cetak Label",
                icon: FiPrinter
            },
            edit: {
                text: "Ubah",
                icon: FiEdit
            },
            delete: {
                text: "Hapus",
                icon: FiTrash
            },
            back: {
                text: "Back",
                icon: FiChevronLeft
            },
            save: {
                text: "Simpan",
                icon: FiSave
            },
            apply: {
                text: "Terapkan",
                icon: FiFilter
            },
            choose: {
                text: "Pilih",
                icon: FiCircle
            },
            reset: {
                text: "Reset",
                icon: FiRewind
            },
            history: {
                text: "Lihat Riwayat",
                icon: FiClock
            },
            download: {
                text: "Unduh",
                icon: FiDownload
            },
        },
        auth: {
            general: {
                text: "Umum",
                icon: FiUser
            },
            sign_in: {
                text: "Masuk",
                icon: FiLogIn
            },
            sign_out: {
                text: "Keluar",
                icon: FiLogOut
            },
            change_password: {
                text: "Ubah Password",
                icon: FiLock
            },
            update_profile: {
                text: "Perbarui Profil",
                icon: FiSend
            }
        }
    },
    storage: {
        auth: `${LocalStorage}/auth`,
        profile: `${LocalStorage}/profile`,
        user_access: `${LocalStorage}/user_access`,
    },
    path: {
        home: "/",
        auth: {
            sign_in: "/auth/sign-in"
        },
        dashboard: {
            index: "/dashboard",
            profile: "/dashboard/profile",
            user: {
                list: "/dashboard/users",
                form: "/dashboard/users/:userId/form",
            },
            user_access: {
                list: "/dashboard/users/:userId/access",
            },
            places: {
                building: {
                    list: "/dashboard/places/gedung",
                    form: "/dashboard/places/building/:buildingId/form",
                },
                floor: {
                    list: "/dashboard/places/building/:buildingId/lantai",
                    form: "/dashboard/places/building/:buildingId/floor/:floorId/form",
                },
                room: {
                    list: "/dashboard/places/building/:buildingId/floor/:floorId/ruangan",
                    form: "/dashboard/places/building/:buildingId/floor/:floorId/room/:roomId/form",
                },
            },
            assets: {
                general: {
                    list: "/dashboard/assets/general",
                    form: "/dashboard/assets/general/:asetId/form",
                },
                used: {
                    list: "/dashboard/assets/general/:asetId/used",
                    form: "/dashboard/assets/general/:asetId/used/:trxId/form",
                },
                mapping: {
                    list: "/dashboard/assets/general/:asetId/mapping",
                    form: "/dashboard/assets/general/:asetId/mapping/:trxId/form",
                },
            },
            maintenance: {
                list: "/dashboard/maintenance",
                form: "/dashboard/maintenance/:id/form",
            },
            report: {
                place: {
                    building: `/dashboard/report/place/building`,
                    floor: `/dashboard/report/place/floor`,
                    room: `/dashboard/report/place/room`,
                },
                asset: `/dashboard/report/asset/:type/general/:mode`,
                used_asset: `/dashboard/report/asset/:mode/used`,
                maintenance: `/dashboard/report/maintenance/:mode`,
            }
        }
    },
    api: {
        auth: {
            sign_in: `${baseURL}/login`,
            profile: `${baseURL}/profile`,
            change_password: `${baseURL}/change_password`,
        },
        user: {
            list: (filter: MComponentGlobalSearch.Filter) => {
                let temp = `page=${filter.page}&size=${filter.size}`;
                if (filter.filter_by !== null) {
                    temp = `${temp}&filter_by=${filter.filter_by}`;
                }
                if (filter.sort_by !== null) {
                    temp = `${temp}&sort_by=${filter.sort_by}`;
                }
                if (filter.query !== null) {
                    temp = `${temp}&query=${filter.query}`;
                }

                return `${baseURL}/user_list?${temp}`;
            },
            detail: (user_id: number) => {
                return `${baseURL}/user_detail?user_id=${user_id}`
            },
            new: `${baseURL}/user_new`,
            edit: (user_id: number) => {
                return `${baseURL}/user_edit?user_id=${user_id}`
            },
            delete: (user_id: number) => {
                return `${baseURL}/user_delete?user_id=${user_id}`
            },
        },
        user_access: {
            list: `${baseURL}/user_access_menu_list`,
            list_by_id: (id_user: number) => `${baseURL}/user_access_menu_list_by_id?id_user=${id_user}`,
            new: `${baseURL}/user_access_menu_new`,
            edit: (id: number) => {
                return `${baseURL}/user_access_menu_edit?id=${id}`
            },
            delete: (id: number) => {
                return `${baseURL}/user_access_menu_delete?id=${id}`
            },
        },
        menus: {
            list: `${baseURL}/menu_list`,
            new: `${baseURL}/menu_new`,
            edit: (menu_id: number) => {
                return `${baseURL}/menu_edit?menu_id=${menu_id}`
            },
            delete: (menu_id: number) => {
                return `${baseURL}/menu_delete?menu_id=${menu_id}`
            },
        },
        assets: {
            list: (filter: MComponentGlobalSearch.Filter) => {
                let temp = `page=${filter.page}&size=${filter.size}`;
                if (filter.filter_by !== null) {
                    temp = `${temp}&filter_by=${filter.filter_by}`;
                }
                if (filter.sort_by !== null) {
                    temp = `${temp}&sort_by=${filter.sort_by}`;
                }
                if (filter.query !== null) {
                    temp = `${temp}&query=${filter.query}`;
                }

                return `${baseURL}/aset_list?${temp}`;
            },
            list_used: (aset_id: number, filter: MComponentGlobalSearch.Filter) => {
                let temp = `id_aset=${aset_id}&page=${filter.page}&size=${filter.size}`;
                if (filter.filter_by !== null) {
                    temp = `${temp}&filter_by=${filter.filter_by}`;
                }
                if (filter.sort_by !== null) {
                    temp = `${temp}&sort_by=${filter.sort_by}`;
                }
                if (filter.query !== null) {
                    temp = `${temp}&query=${filter.query}`;
                }

                return `${baseURL}/used_aset_list?${temp}`;
            },
            list_used_all: (filter: string) => {
                return `${baseURL}/used_aset_list_all?${filter}`;
            },
            list_mapping: (aset_id: number, filter: MComponentGlobalSearch.Filter) => {
                let temp = `id_aset=${aset_id}&page=${filter.page}&size=${filter.size}`;
                if (filter.filter_by !== null) {
                    temp = `${temp}&filter_by=${filter.filter_by}`;
                }
                if (filter.sort_by !== null) {
                    temp = `${temp}&sort_by=${filter.sort_by}`;
                }
                if (filter.query !== null) {
                    temp = `${temp}&query=${filter.query}`;
                }

                return `${baseURL}/mapping_aset_list?${temp}`;
            },
            detail: (aset_id: number) => {
                return `${baseURL}/aset_detail?aset_id=${aset_id}`
            },
            new: `${baseURL}/aset_new`,
            new_used_in: `${baseURL}/used_aset_in`,
            new_used_out: `${baseURL}/used_aset_out`,
            close_used: `${baseURL}/close_used_aset_out`,
            new_mapping: `${baseURL}/mapping_aset_new`,
            edit: (aset_id: number) => {
                return `${baseURL}/aset_edit?aset_id=${aset_id}`
            },
            delete: (aset_id: number) => {
                return `${baseURL}/aset_delete?aset_id=${aset_id}`
            },
            delete_mapping: (id: number) => {
                return `${baseURL}/mapping_aset_delete?id=${id}`
            },
        },
        places: {
            building: {
                list: (filter: MComponentGlobalSearch.Filter) => {
                    let temp = `page=${filter.page}&size=${filter.size}`;
                    if (filter.filter_by !== null) {
                        temp = `${temp}&filter_by=${filter.filter_by}`;
                    }
                    if (filter.sort_by !== null) {
                        temp = `${temp}&sort_by=${filter.sort_by}`;
                    }
                    if (filter.query !== null) {
                        temp = `${temp}&query=${filter.query}`;
                    }
    
                    return `${baseURL}/gedung_list?${temp}`;
                },
                detail: (gedung_id: number) => {
                    return `${baseURL}/gedung_detail?gedung_id=${gedung_id}`
                },
                new: `${baseURL}/gedung_new`,
                edit: (gedung_id: number) => {
                    return `${baseURL}/gedung_edit?gedung_id=${gedung_id}`
                },
                delete: (gedung_id: number) => {
                    return `${baseURL}/gedung_delete?gedung_id=${gedung_id}`
                },
            },
            floor: {
                list: (filter: MComponentGlobalSearch.Filter) => {
                    let temp = `page=${filter.page}&size=${filter.size}`;
                    if (filter.filter_by !== null) {
                        temp = `${temp}&filter_by=${filter.filter_by}`;
                    }
                    if (filter.sort_by !== null) {
                        temp = `${temp}&sort_by=${filter.sort_by}`;
                    }
                    if (filter.query !== null) {
                        temp = `${temp}&query=${filter.query}`;
                    }
    
                    return `${baseURL}/lantai_list?${temp}`;
                },
                list_building: (gedung_id: number, filter: MComponentGlobalSearch.Filter) => {
                    let temp = `gedung_id=${gedung_id}&page=${filter.page}&size=${filter.size}`;
                    if (filter.filter_by !== null) {
                        temp = `${temp}&filter_by=${filter.filter_by}`;
                    }
                    if (filter.sort_by !== null) {
                        temp = `${temp}&sort_by=${filter.sort_by}`;
                    }
                    if (filter.query !== null) {
                        temp = `${temp}&query=${filter.query}`;
                    }
    
                    return `${baseURL}/lantai_gedung_list?${temp}`;
                },
                detail: (lantai_id: number) => {
                    return `${baseURL}/lantai_detail?lantai_id=${lantai_id}`
                },
                new: `${baseURL}/lantai_new`,
                edit: (lantai_id: number) => {
                    return `${baseURL}/lantai_edit?lantai_id=${lantai_id}`
                },
                delete: (lantai_id: number) => {
                    return `${baseURL}/lantai_delete?lantai_id=${lantai_id}`
                },
            },
            room: {
                list: (filter: MComponentGlobalSearch.Filter) => {
                    let temp = `page=${filter.page}&size=${filter.size}`;
                    if (filter.filter_by !== null) {
                        temp = `${temp}&filter_by=${filter.filter_by}`;
                    }
                    if (filter.sort_by !== null) {
                        temp = `${temp}&sort_by=${filter.sort_by}`;
                    }
                    if (filter.query !== null) {
                        temp = `${temp}&query=${filter.query}`;
                    }
    
                    return `${baseURL}/ruangan_list?${temp}`;
                },
                list_lantain: (lantai_id: number, filter: MComponentGlobalSearch.Filter) => {
                    let temp = `lantai_id=${lantai_id}&page=${filter.page}&size=${filter.size}`;
                    if (filter.filter_by !== null) {
                        temp = `${temp}&filter_by=${filter.filter_by}`;
                    }
                    if (filter.sort_by !== null) {
                        temp = `${temp}&sort_by=${filter.sort_by}`;
                    }
                    if (filter.query !== null) {
                        temp = `${temp}&query=${filter.query}`;
                    }
    
                    return `${baseURL}/ruangan_lantai_list?${temp}`;
                },
                detail: (ruangan_id: number) => {
                    return `${baseURL}/ruangan_detail?ruangan_id=${ruangan_id}`
                },
                new: `${baseURL}/ruangan_new`,
                edit: (ruangan_id: number) => {
                    return `${baseURL}/ruangan_edit?ruangan_id=${ruangan_id}`
                },
                delete: (ruangan_id: number) => {
                    return `${baseURL}/ruangan_delete?ruangan_id=${ruangan_id}`
                },
            },
        },
        maintenance: {
            list: (filter: MComponentGlobalSearch.Filter) => {
                let temp = `page=${filter.page}&size=${filter.size}`;
                if (filter.filter_by !== null) {
                    temp = `${temp}&filter_by=${filter.filter_by}`;
                }
                if (filter.sort_by !== null) {
                    temp = `${temp}&sort_by=${filter.sort_by}`;
                }
                if (filter.query !== null) {
                    temp = `${temp}&query=${filter.query}`;
                }

                return `${baseURL}/schedule_list?${temp}`;
            },
            listAll: (filter: string) => {
                return `${baseURL}/schedule_list?${filter}`;
            },
            detail: (id: number) => {
                return `${baseURL}/schedule_detail?id=${id}`
            },
            new: `${baseURL}/schedule_new`,
            edit: (id: number) => {
                return `${baseURL}/schedule_edit?id=${id}`
            },
            delete: (id: number) => {
                return `${baseURL}/schedule_delete?id=${id}`
            },
        },
        report: {
            place: {
                count: `${baseURL}/count_place_report`,
                download: {
                    building: (token: string) => `${baseURL}/download_place_building_report?token=${token}&filter_by=id&sort_by=DESC&query=`,
                    floor: (token: string) => `${baseURL}/download_place_floor_report?token=${token}&filter_by=id&sort_by=DESC&query=`,
                    room: (token: string) => `${baseURL}/download_place_room_report?token=${token}&filter_by=id&sort_by=DESC&query=`,
                },
            },
            asset: {
                count: `${baseURL}/count_aset_report`,
                print_label: (token: string, aset_id: number) => `${baseURL}/print_label_asset?token=${token}&aset_id=${aset_id}`,
                download: (token: string, type: "tersedia" | "habis" | string) => `${baseURL}/download_aset_report?token=${token}&filter_by=kondisi&sort_by=DESC&query=${type}`,
            },
            asset_used: {
                count: `${baseURL}/count_aset_transaction_report`,
                download: (token: string, type: "in" | "out", out_status: string, is_closed: number) => {
                    let temp = `filter_by=jenis_transaksi&sort_by=DESC&query=`;
                    if (type === "in") temp += `masuk`
                    else {
                        temp += `keluar`
                        temp += `&status_keluar=${out_status}`
                        temp += `&is_closed=${is_closed}`
                    }
                    return `${baseURL}/download_aset_transaction_report?token=${token}&${temp}`;
                },
            },
            schedule: {
                count: `${baseURL}/count_schedule_report`,
                download: (token: string, type: string) => `${baseURL}/download_schedule_report?token=${token}&filter_by=status&sort_by=DESC&query=${type}`,
            },
        }
    },
    function: {
        masking: (value: number) => {
            return `${Intl.NumberFormat("en-DE").format(value)}`
        },
        to_rupiah: (value: number) => {
            return `Rp ${Intl.NumberFormat("en-DE").format(value)}`
        },
        masking_date: (e: React.ChangeEvent<HTMLInputElement>, onFinish: (value: string) => void) => {
            // Get the current value of the input
            let value = e.target.value;

            // Remove any non-numeric characters
            value = value.replace(/\D/g, '');

            // Tambah the mask based on the length of the input
            if (value.length <= 16) {
                if (value.length >= 5) {
                    value = value.slice(0, 4) + '-' + value.slice(4);
                }
                if (value.length >= 8) {
                    value = value.slice(0, 7) + '-' + value.slice(7);
                }
                if (value.length >= 10) {
                    value = value.slice(0, 10) + ' ' + value.slice(10);
                }
                if (value.length >= 13) {
                    value = value.slice(0, 13) + ':' + value.slice(13);
                }
                if (value.length >= 16) {
                    value = value.slice(0, 16);
                }
            } else {
                value = value.slice(0, 16);
                if (value.length >= 5) {
                    value = value.slice(0, 4) + '-' + value.slice(4);
                }
                if (value.length >= 8) {
                    value = value.slice(0, 7) + '-' + value.slice(7);
                }
                if (value.length >= 10) {
                    value = value.slice(0, 10) + ' ' + value.slice(10);
                }
                if (value.length >= 13) {
                    value = value.slice(0, 13) + ':' + value.slice(13);
                }
                if (value.length >= 16) {
                    value = value.slice(0, 16);
                }
            }

            // Update the input value
            e.target.value = value;
            onFinish(value);
        },
        check_is_valid_access: (
            target: string, 
            target_action: "lihat" | "tambah" | "ubah" | "hapus", 
            access: MApiUserAccess.Item[]) => {
            
            let temp = access.find((it) => { return it.id_menu ===  target })
            if (temp !== undefined) {
                if (Object.prototype.hasOwnProperty.call(temp, target_action)) {
                    return temp?.[target_action] === "1";
                }
            } else {
                return false;
            }
        }
    }
}

export default CUtilityString