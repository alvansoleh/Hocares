import { CApiUserAccess, CUtilityLoad, CUtilityRouterFunc } from "controllers";
import { LTemp, LUsecaseUserAccess } from "logics";
import { useParams } from "react-router-dom";
import { VComponentToast } from "views/components";

const CUsecaseUserAccess = () => {

    const { 
        showMessageError, 
        showMessageSuccess 
    } = VComponentToast();
    const {
        formUserAccess,
        userAccessList,
        isLoadingUserAccess,
        removeUserAccess,
        setFormUserAccess,
        setUserAccessList,
        setIsLoadingUserAccess,
        setUserAccessByToken,
        setUserId,
        userAccessByToken,
        userId,
        writeUserAccess
    } = LUsecaseUserAccess();
    const {
        deleteUserAccessReq,
        getUserAccessListByIDReq,
        getUserAccessListReq,
        newUserAccessReq,
        updateUserAccessReq
    } = CApiUserAccess();

    const {
        user_access
    } = LTemp();

    const { userId: id } = useParams();

    const {} = CUtilityLoad(() => {
        if (id !== undefined && id !== "-1") {
            setUserId(Number(id));
        }
    })

    const loadUserAccessList = () => {
        if (userId !== undefined) {
            setIsLoadingUserAccess(true);
            getUserAccessListByIDReq(userId, (res) => {
                if (res.status) {
                    if (res.data !== undefined) {
                        setFormUserAccess(res.data);
                        setUserAccessList(res.data);
                    } else {
                        setFormUserAccess([]);
                        setUserAccessList([]);
                    }
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUserAccess(false);
                });
            });
        }
    }

    const loadMyUserAccess = () => {
        setIsLoadingUserAccess(true);
        getUserAccessListReq((res) => {
            if (res.status) {
                if (res.data !== undefined) {
                    setUserAccessByToken(res.data);
                    user_access.set(JSON.stringify(res.data));
                } else {
                    setUserAccessByToken([]);
                }
            } else {
                showMessageError(res.message);
            }
            CUtilityRouterFunc.wait(() => {
                setIsLoadingUserAccess(false);
            });
        });
    }

    const loadUserAccess = (is_force: boolean = false) => {
        setIsLoadingUserAccess(true);
        const temp = user_access.get();
        if (temp.length > 0 && !is_force) {
            setUserAccessByToken(temp);
            setIsLoadingUserAccess(false);
        } else {
            loadMyUserAccess();
        }
    }

    const doWriteUserAccess = () => {
        if (userId !== undefined) {
            let progress = 0, error = 0;

            let temp: MApiUserAccess.Item[] = []
            formUserAccess.forEach((it) => {
                if (it.id === "") {
                    temp.push(it);
                } else {
                    const index = userAccessList.findIndex((it2) => it.id === it2.id);
                    if (index > -1) {
                        if (
                            it.lihat !== userAccessList[index].lihat
                            || it.tambah !== userAccessList[index].tambah
                            || it.ubah !== userAccessList[index].ubah
                            || it.hapus !== userAccessList[index].hapus
                        ) {
                            temp.push(it);
                        }
                    }
                }
            })

            if (temp.length > 0) {
                setIsLoadingUserAccess(true);
            }

            temp.forEach((it) => {
                if (it.id !== "") {
                    updateUserAccessReq(Number(it.id), it, (res) => {
                        progress += 1;
                        if (res.status) {
                            if (progress >= temp.length - 1) {
                                showMessageSuccess(res.message);
                                CUtilityRouterFunc.wait(() => {
                                    CUtilityRouterFunc.reload();
                                });
                            } 
                        } else {
                            error += 1;
                            if (progress >= temp.length - 1) {
                                showMessageError(res.message);
                            } 
                        }
                        
                        if (progress >= temp.length - 1) {
                            CUtilityRouterFunc.wait(() => {
                                setIsLoadingUserAccess(false);
                            });
                        }
                    });
                } else {
                    newUserAccessReq(it, (res) => {
                        progress += 1;
                        if (res.status) {
                            if (progress >= temp.length - 1) {
                                showMessageSuccess(res.message);
                                CUtilityRouterFunc.wait(() => {
                                    CUtilityRouterFunc.reload();
                                });
                            } 
                        } else {
                            error += 1;
                            if (progress >= temp.length - 1) {
                                showMessageError(res.message);
                            } 
                        }
                        
                        if (progress >= temp.length - 1) {
                            CUtilityRouterFunc.wait(() => {
                                setIsLoadingUserAccess(false);
                            });
                        }
                    });
                }
            })
        }
    }

    const doDeleteUserAccess = (id: string) => {
        if (id !== undefined) {
            setIsLoadingUserAccess(true);
            deleteUserAccessReq(Number(id), (res) => {
                if (res.status) {
                    showMessageSuccess(res.message);
                    CUtilityRouterFunc.wait(() => {
                        CUtilityRouterFunc.reload();
                    });
                } else {
                    showMessageError(res.message);
                }
                CUtilityRouterFunc.wait(() => {
                    setIsLoadingUserAccess(false);
                });
            });
        }
    }

    return {
        isLoadingUserAccess,

        userId,
        userAccessByToken,
        formUserAccess,

        loadUserAccessList,
        loadUserAccess,
        loadMyUserAccess,
        doWriteUserAccess,
        doDeleteUserAccess,

        setUserAccessByToken,
        setFormUserAccess,
        setUserId,
        removeUserAccess, 
        writeUserAccess
    }
}

export default CUsecaseUserAccess