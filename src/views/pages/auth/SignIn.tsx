import { VStack } from "@chakra-ui/react";
import { CUsecaseAuthSignIn, CUtilityRouterFunc, CUtilityString } from "controllers";
import { VComponentLayoutCenter } from "views/components";
import { VPageAuthSignInButton, VPageAuthSignInFieldPassword, VPageAuthSignInFieldUsername, VPageAuthSignInTitle } from "./sign-in";
import { LTemp } from "logics";
import { useEffect } from "react";

const VPageAuthSignIn: React.FC = (): JSX.Element => {

    const {
        isLoadingLogin,
        
        setFormPassword,
        setFormUsername,

        doLogin
    } = CUsecaseAuthSignIn();
    const {
        isLogged
    } = LTemp();

    useEffect(() => {
        if (isLogged !== undefined) {
            if (isLogged) {
                CUtilityRouterFunc.to(CUtilityString.path.dashboard.index);
            }
        }
    }, [isLogged])

    return (<VComponentLayoutCenter>
        <VStack width={"md"} spacing={2} paddingX={8} paddingY={4}>
            <VPageAuthSignInTitle />
            <VPageAuthSignInFieldUsername 
                onChange={setFormUsername} />
            <VPageAuthSignInFieldPassword
                onChange={setFormPassword} />
            <VPageAuthSignInButton 
                loading={isLoadingLogin} 
                onClick={doLogin} />
        </VStack>   
    </VComponentLayoutCenter>)
}

export default VPageAuthSignIn