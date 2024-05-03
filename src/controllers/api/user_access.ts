import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiUserAccess = () => {

    const { token } = LTemp();

    const getUserAccessListReq = (callback: (data: MApiUserAccess.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user_access.list,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUserAccess.ResponseINF = JSON.parse(result) as MApiUserAccess.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getUserAccessListByIDReq = (id_user: number, callback: (data: MApiUserAccess.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user_access.list_by_id(id_user),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUserAccess.ResponseINF = JSON.parse(result) as MApiUserAccess.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newUserAccessReq = (body: MApiUserAccess.Item, callback: (data: MApiUserAccess.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user_access.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiUserAccess.ResponseWriteINF = JSON.parse(result) as MApiUserAccess.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateUserAccessReq = (id: number, body: MApiUserAccess.Item, callback: (data: MApiUserAccess.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user_access.edit(id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiUserAccess.ResponseWriteINF = JSON.parse(result) as MApiUserAccess.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteUserAccessReq = (id: number, callback: (data: MApiUserAccess.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user_access.delete(id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUserAccess.ResponseWriteINF = JSON.parse(result) as MApiUserAccess.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getUserAccessListReq,
        getUserAccessListByIDReq,
        newUserAccessReq,
        updateUserAccessReq,
        deleteUserAccessReq,
    }

}

export default CApiUserAccess