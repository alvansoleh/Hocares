import { CApiMenus, CUtilityRouterFunc } from "controllers";
import { LUsecaseMenus } from "logics";
import { VComponentToast } from "views/components";

const CUsecaseMenus = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        getNewMenu,
        isLoadingMenu,
        menuList,
        setIsLoadingMenu,
        setMenuList
    } = LUsecaseMenus();
    const {
        getMenuListReq
    } = CApiMenus();

    const loadMenuList = () => {
        setIsLoadingMenu(true);
        getMenuListReq((res) => {
            if (res.status) {
                if (res.data !== undefined) {
                    setMenuList(res.data);
                } else {
                    setMenuList([]);
                }
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingMenu(false);
            });
        });
    }

    return {
        isLoadingMenu,

        menuList,

        loadMenuList,

        setIsLoadingMenu,
        setMenuList,
        getNewMenu,
    }
}

export default CUsecaseMenus