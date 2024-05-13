import LTemp from "logics/temp";
import { useState } from "react";

const LUsecaseMenus = () => {
    // Setup List
    const [menuList, setMenuList] = useState<MApiMenus.Item[]>([]);
    const [isLoadingMenu, setIsLoadingMenu] = useState(false);
    const { active_user } = LTemp();

    const getNewMenu = (id_menu: number, id_user: number): MApiUserAccess.Item => {
        let temp = menuList.find((it) => it.id === `${id_menu}`);
        return {
            id: "",
            id_menu: temp?.id || "",
            id_user: `${id_user}`,
            full_name: active_user.get()?.full_name || "-",
            nama_menu: temp?.nama_menu || "",
            path: temp?.path || "",
            lihat: "0",
            hapus: "0",
            tambah: "0",
            ubah: "0",
            is_delete: "0",
        }
    }

    // Export Function
    return {
        menuList,
        isLoadingMenu,

        setMenuList,
        setIsLoadingMenu,
        getNewMenu
    }
}

export default LUsecaseMenus