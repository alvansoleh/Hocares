import { useState } from "react";

const LUsecaseUser = () => {
    // Setup List
    const [userId, setUserId] = useState<number>();
    const [userList, setUserList] = useState<MApiUser.Item[]>([]);
    const [userDetail, setUserDetail] = useState<MApiUser.Item>();
    const [formUserDetail, setFormUserDetail] = useState<MUsecaseUserForm.User>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingUser, setIsLoadingUser] = useState(false);

    // Export Function
    return {
        userId,
        userList,
        userDetail,
        formUserDetail,
        formFilter,
        isLoadingUser,

        setUserId,
        setUserList,
        setUserDetail,
        setFormUserDetail,
        setFormFilter,
        setIsLoadingUser,
    }
}

export default LUsecaseUser