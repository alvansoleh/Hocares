import { Button, HStack, Icon, Spacer } from "@chakra-ui/react"
import { CUtilityString } from "controllers"

const VPageDashboardProfileFieldGeneralButton: React.FC<MComponentUsecaseAuthSignIn.Button> = ({
    loading,
    onClick
}): JSX.Element => {

    return (<HStack width={"full"}>
        <Spacer />
        <Button 
            leftIcon={<Icon as={CUtilityString.buttons.auth.update_profile.icon} />}
            width={"fit-content"}
            colorScheme="green"
            isLoading={loading}
            isDisabled={loading}
            onClick={onClick}>{CUtilityString.buttons.auth.update_profile.text}</Button>
    </HStack>)
}

export default VPageDashboardProfileFieldGeneralButton