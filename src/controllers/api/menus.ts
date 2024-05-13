import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiMenus = () => {

    const { token } = LTemp();

    const getMenuListReq = (callback: (data: MApiMenus.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.menus.list,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMenus.ResponseINF = JSON.parse(result) as MApiMenus.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newMenuReq = (body: MApiMenus.Item, callback: (data: MApiMenus.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.menus.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiMenus.ResponseWriteINF = JSON.parse(result) as MApiMenus.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateMenuReq = (id: number, body: MApiMenus.Item, callback: (data: MApiMenus.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.menus.edit(id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiMenus.ResponseWriteINF = JSON.parse(result) as MApiMenus.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteMenuReq = (id: number, callback: (data: MApiMenus.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.menus.delete(id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiMenus.ResponseWriteINF = JSON.parse(result) as MApiMenus.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getMenuListReq,
        updateMenuReq,
        newMenuReq,
        deleteMenuReq
    }

}

export default CApiMenus