import { CUtilityLoad, CUtilityStorage, CUtilityString } from "controllers";
import { useState } from "react";

const LTemp = () => {
    
    const { getString, save, remove } = CUtilityStorage();

    const [isLogged, setIsLogged] = useState<boolean>();

    const token = {
        get: () : string => {
            const token = getString(CUtilityString.storage.auth) || "";
            return token;
        },
        set: (token: string) => {
            save(CUtilityString.storage.auth, token);
        },
        remove: () => {
            remove(CUtilityString.storage.auth);
        }
    }

    const active_user = {
        get: () : MApiAuth.Profile | null => {
            const temp = getString(CUtilityString.storage.profile) || "";
            if (temp.length > 0) {
                return (JSON.parse(temp) as MApiAuth.Profile);
            }
            return null;
        },
        set: (profile: MApiAuth.Profile) => {
            save(CUtilityString.storage.profile, JSON.stringify(profile));
        },
        remove: () => {
            remove(CUtilityString.storage.profile);
        }
    }

    const user_access = {
        get: () : MApiUserAccess.Item[] => {
            const data = getString(CUtilityString.storage.user_access) || "";
            if (data.length > 0) {
                return (JSON.parse(data) as MApiUserAccess.Item[]);
            }
            return [];
        },
        set: (data: string) => {
            save(CUtilityString.storage.user_access, data);
        },
        remove: () => {
            remove(CUtilityString.storage.user_access);
        }
    }

    const {} = CUtilityLoad(() => {
        setIsLogged(token.get() !== "");
    });

    return {
        isLogged,
        token,
        active_user,
        user_access
    }
}

export default LTemp