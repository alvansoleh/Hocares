import { useState } from "react";

const LUsecaseUserAccess = () => {
    // Setup List
    const [userId, setUserId] = useState<number>();
    const [userAccessByToken, setUserAccessByToken] = useState<MApiUserAccess.Item[]>([]);
    const [formUserAccess, setFormUserAccess] = useState<MApiUserAccess.Item[]>([]);
    const [userAccessList, setUserAccessList] = useState<MApiUserAccess.Item[]>([]);
    const [isLoadingUserAccess, setIsLoadingUserAccess] = useState(false);

    const writeUserAccess = (body: MApiUserAccess.Item) => {
        let temp = [...formUserAccess]
        let findIndex = formUserAccess.findIndex((it) => it.id_menu === body.id_menu);
        if (findIndex === -1) {
            temp.push(body);
        } else {
            temp[findIndex] = body;
        }

        setFormUserAccess(temp);
    }

    const removeUserAccess = (index: number) => {
        let temp = [...formUserAccess]
        temp.splice(index, 1);
        setFormUserAccess(temp)
    }

    // Export Function
    return {
        userId,
        userAccessByToken,
        formUserAccess,
        userAccessList,
        isLoadingUserAccess,

        setUserId,
        setUserAccessByToken,
        setFormUserAccess,
        setUserAccessList,
        writeUserAccess,
        removeUserAccess,
        setIsLoadingUserAccess,
    }
}

export default LUsecaseUserAccess