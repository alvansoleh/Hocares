import { CApiAuth, CUtilityRouterFunc } from "controllers";
import { LTemp, LUsecaseAuthSignIn } from "logics";
import { VComponentToast } from "views/components";

const CUsecaseAuthSignIn = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        forms,
        isLoadingLogin,
        setFormPassword,
        setFormUsername,
        setIsLoadingLogin
    } = LUsecaseAuthSignIn();
    const {
        token
    } = LTemp();
    const {
        signInReq
    } = CApiAuth();

    const doLogin = () => {
        setIsLoadingLogin(true);
        signInReq(forms, (res) => {
            if (res.status) {
                showMessageSuccess(res.message);
                token.set(res.data.token);
                CUtilityRouterFunc.wait(() => {
                    CUtilityRouterFunc.reload();
                })
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingLogin(false);
                
            })
            
        });
    }

    return {
        isLoadingLogin,

        setFormPassword,
        setFormUsername,

        doLogin
    }
}

export default CUsecaseAuthSignIn