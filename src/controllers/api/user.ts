import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiUser = () => {

    const { token } = LTemp();

    const getUserListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiUser.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUser.ResponseINF = JSON.parse(result) as MApiUser.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getUserDetailReq = (user_id: number, callback: (data: MApiUser.ResponseDetailINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user.detail(user_id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUser.ResponseDetailINF = JSON.parse(result) as MApiUser.ResponseDetailINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newUserReq = (body: MUsecaseUserForm.User, callback: (data: MApiUser.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiUser.ResponseWriteINF = JSON.parse(result) as MApiUser.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateUserReq = (user_id: number, body: MUsecaseUserForm.User, callback: (data: MApiUser.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user.edit(user_id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiUser.ResponseWriteINF = JSON.parse(result) as MApiUser.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteUserReq = (user_id: number, callback: (data: MApiUser.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.user.delete(user_id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiUser.ResponseWriteINF = JSON.parse(result) as MApiUser.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getUserListReq,
        getUserDetailReq,
        newUserReq,
        updateUserReq,
        deleteUserReq
    }

}

export default CApiUser