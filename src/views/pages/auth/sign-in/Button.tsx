import { Box, Button, HStack, Icon, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageAuthSignInButton: React.FC<MComponentUsecaseAuthSignIn.Button> = ({
    loading,
    onClick
}): JSX.Element => {

    return (<HStack width={"full"} marginBottom={2}>
            <Box flex={1}>
                <Text cursor={"pointer"} textColor={CUtilityColor.federal} fontSize={16}>
                    {CUtilityString.text.forgot_password}
                </Text>
            </Box>
            <Button size={"sm"} backgroundColor={CUtilityColor.federal} textColor={CUtilityColor.white}
                leftIcon={<Icon as={CUtilityString.buttons.auth.sign_in.icon} />}
                isLoading={loading}
                isDisabled={loading}
                onClick={onClick}>
                {CUtilityString.buttons.auth.sign_in.text}
            </Button>
        </HStack>)
}

export default VPageAuthSignInButton