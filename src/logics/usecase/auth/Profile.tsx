import { useState } from "react";

const LUsecaseAuthProfile = () => {
    // Setup Forms
    const [profile, setProfile] = useState<MApiAuth.Profile>();
    const [formProfile, setFormProfile] = useState<MUsecaseAuthForm.Profile>();
    const [formPassword, setFormPassword] = useState<MUsecaseAuthForm.Password>();
    const [isLoadingProfile, setIsLoadingProfile] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    // Export Function
    return {
        profile,
        formProfile,
        formPassword,
        isLoadingProfile,
        isShowPassword,

        setProfile,
        setFormProfile,
        setFormPassword,
        setIsLoadingProfile,
        setIsShowPassword
    }
}

export default LUsecaseAuthProfile;