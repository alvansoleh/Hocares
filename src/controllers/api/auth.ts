import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiAuth = () => {

    const { token } = LTemp();

    const signInReq = (body: MUsecaseAuthForm.Login, callback: (data: MApiAuth.ResponseINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.auth.sign_in,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            },
            onSuccess: (result) => {
                const data: MApiAuth.ResponseINF = JSON.parse(result) as MApiAuth.ResponseINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getProfileReq = (callback: (data: MApiAuth.ResponseProfileINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.auth.profile,
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAuth.ResponseProfileINF = JSON.parse(result) as MApiAuth.ResponseProfileINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateProfileReq = (body: MUsecaseAuthForm.Profile, callback: (data: MApiAuth.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.auth.profile,
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAuth.ResponseWriteINF = JSON.parse(result) as MApiAuth.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const changePasswordReq = (body: MUsecaseAuthForm.Password, callback: (data: MApiAuth.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.auth.change_password,
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAuth.ResponseWriteINF = JSON.parse(result) as MApiAuth.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        signInReq,
        getProfileReq,
        updateProfileReq,
        changePasswordReq
    }

}

export default CApiAuth