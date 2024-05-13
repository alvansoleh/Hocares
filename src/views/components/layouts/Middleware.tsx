import { Box } from "@chakra-ui/react"
import VComponentLoader from "../loader"
import { LTemp } from "logics";
import { useEffect } from "react";
import { CUtilityRouterFunc, CUtilityString } from "controllers";

const VComponentLayoutMiddleware: React.FC = (): JSX.Element => {

    const { isLogged } = LTemp();

    useEffect(() => {
        if (isLogged !== undefined) {
            if (!isLogged) {
                CUtilityRouterFunc.to(CUtilityString.path.auth.sign_in);
            } else {
                CUtilityRouterFunc.wait(() => {
                    CUtilityRouterFunc.to(CUtilityString.path.dashboard.index);
                })
            }
        }
    }, [isLogged])

    return (<Box
        width={"100%"}
        height={"100vh"}
        position={"relative"}>
        <VComponentLoader />
    </Box>)
}

export default VComponentLayoutMiddleware