import { CApiUser, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LUsecaseUser } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseUser = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        userId,
        userList,
        userDetail,
        formUserDetail,
        formFilter,
        isLoadingUser,
        setIsLoadingUser,
        setUserId,
        setUserList,
        setUserDetail,
        setFormUserDetail,
        setFormFilter
    } = LUsecaseUser();
    const {
        getUserListReq,
        getUserDetailReq,
        newUserReq,
        updateUserReq,
        deleteUserReq
    } = CApiUser();

    const { userId: id } = useParams();

    const {} = CUtilityLoad(() => {
        setFormFilter({
            page: 0,
            size: 10,
            filter_by: "",
            sort_by: "",
            query: "",
            is_apply: true
        });
        if (id !== undefined && id !== "-1") {
            setUserId(Number(id));
        } else {
            setFormUserDetail({
                email: "",
                full_name: "",
                no_hp: "",
                password: "",
                username: "",
            });
        }
    })

    const loadUserList = () => {
        if (formFilter !== undefined) {
            setIsLoadingUser(true);
            getUserListReq(formFilter, (res) => {
                if (res.status) {
                    if (res.data !== undefined) {
                        setUserList(res.data);
                    } else {
                        setUserList([]);
                    }
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUser(false);
                });
            });
        }
    }

    const loadUserDetail = () => {
        if (userId !== undefined) {
            setIsLoadingUser(true);
            getUserDetailReq(userId, (res) => {
                if (res.status) {
                    setUserDetail(res.data);
                    setFormUserDetail({
                        email: res.data.email,
                        full_name: res.data.full_name,
                        no_hp: res.data.no_hp,
                        password: "",
                        username: res.data.username,
                    })
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUser(false);
                });
            });
        }
    }

    const doNewUser = () => {
        if (userId === undefined && formUserDetail !== undefined) {
            setIsLoadingUser(true);
            newUserReq(formUserDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUser(false);
                });
            });
        }
    }

    const doUpdateUser = () => {
        if (userId !== undefined && formUserDetail !== undefined) {
            setIsLoadingUser(true);
            updateUserReq(userId, formUserDetail, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.back();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUser(false);
                });
            });
        }
    }
    
    const doFormUser = () => {
        if (userId === undefined) {
            doNewUser();
        } else {
            doUpdateUser();
        }
    }

    const doDeleteUser = () => {
        if (userDetail !== undefined) {
            setIsLoadingUser(true);
            deleteUserReq(userDetail.id, (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUser(false);
                });
            });
        }
    }

    return {
        isLoadingUser,

        userId,
        userList,
        userDetail,
        formUserDetail,
        formFilter,

        loadUserList,
        loadUserDetail,
        doFormUser,
        doDeleteUser,

        setFormFilter,
        setUserDetail,
        setFormUserDetail,
    }
}

export default CUsecaseUser