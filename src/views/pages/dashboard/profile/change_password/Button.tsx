import { Button, HStack, Icon, Spacer } from "@chakra-ui/react"
import { CUtilityString } from "controllers"

const VPageDashboardProfileFieldChangePasswordButton: React.FC<MComponentUsecaseAuthSignIn.Button> = ({
    loading,
    onClick
}): JSX.Element => {

    return (<HStack width={"full"}>
        <Spacer />
        <Button 
            leftIcon={<Icon as={CUtilityString.buttons.auth.change_password.icon} />}
            width={"fit-content"}
            colorScheme="green"
            isLoading={loading}
            isDisabled={loading}
            onClick={onClick}>{CUtilityString.buttons.auth.change_password.text}</Button>
    </HStack>)
}

export default VPageDashboardProfileFieldChangePasswordButton