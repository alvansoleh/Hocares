import { useState } from "react";

const LUsecaseAuthSignIn = () => {
    // Setup Forms
    const [forms, setForms] = useState<MUsecaseAuthForm.Login>({
        password: "",
        username: ""
    });
    const [isLoadingLogin, setIsLoadingLogin] = useState(false);

    // Handle Set
    const setFormUsername = (username: string) => {
        const temp = {
            ...forms,
            username
        }

        setForms(temp);
    }
    const setFormPassword = (password: string) => {
        const temp = {
            ...forms,
            password
        }

        setForms(temp);
    }

    // Export Function
    return {
        forms,
        isLoadingLogin,

        setFormUsername,
        setFormPassword,
        setIsLoadingLogin
    }
}

export default LUsecaseAuthSignIn;