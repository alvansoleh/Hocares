import { CApiAuth, CUtilityRouterFunc, CUtilityString } from "controllers";
import { LTemp, LUsecaseAuthProfile } from "logics";
import { VComponentToast } from "views/components";

const CUsecaseAuthProfile = () => {

    const { 
        showMessageError, 
        showMessageSuccess
    } = VComponentToast();
    const {
        active_user,
        user_access,
        token,
    } = LTemp();
    const {
        profile,
        formProfile,
        formPassword,
        isLoadingProfile,
        setProfile,
        setFormProfile,
        setFormPassword,
        setIsLoadingProfile
    } = LUsecaseAuthProfile();
    const {
        getProfileReq,
        updateProfileReq,
        changePasswordReq
    } = CApiAuth();

    const loadProfile = (is_force: boolean = false) => {
        setIsLoadingProfile(true);
        const temp = active_user.get();
        if (temp !== null && !is_force) {
            setProfile(temp);
            setFormProfile({
                email: temp.email || "",
                full_name: temp.full_name || "",
                no_hp: temp.no_hp || "",
                username: temp.username || "",
                password: null
            });
            setFormPassword({
                password: "",
                new_password: "",
                retype_password: ""
            });
            setIsLoadingProfile(false);
        } else {
            getProfileReq((res) => {
                if (res.status) {
                    setProfile(res.data);
                    active_user.set(res.data);
                    setFormProfile({
                        email: res.data.email || "",
                        full_name: res.data.full_name || "",
                        no_hp: res.data.no_hp || "",
                        username: res.data.username || "",
                        password: null
                    });
                    setFormPassword({
                        password: "",
                        new_password: "",
                        retype_password: ""
                    });
                } else {
                    showMessageError(res.message);
                    token.remove();
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.to(CUtilityString.path.auth.sign_in);
                    })
                }
                setIsLoadingProfile(false);
            });
        }
    }

    const updateProfile = () => {
        if (formProfile !== undefined) {
            setIsLoadingProfile(true);
            updateProfileReq(formProfile, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    loadProfile(true);
                } else {
                    showMessageError(res.message);
                }
                setIsLoadingProfile(false);
            });
        }
    }

    const changePassword = () => {
        if (formPassword !== undefined) {
            setIsLoadingProfile(true);
            changePasswordReq(formPassword, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    loadProfile(true);
                } else {
                    showMessageError(res.message);
                }
                setIsLoadingProfile(false);
            });
        }
    }

    const doLogout = () => {
        token.remove();
        active_user.remove();
        user_access.remove();
        CUtilityRouterFunc.wait(() => {
            CUtilityRouterFunc.to(CUtilityString.path.auth.sign_in);
        })
    }

    return {
        isLoadingProfile,

        profile,
        formProfile,
        formPassword,

        loadProfile,
        updateProfile,
        changePassword,
        doLogout,
        
        setProfile,
        setFormProfile,
        setFormPassword,
    }
}

export default CUsecaseAuthProfile