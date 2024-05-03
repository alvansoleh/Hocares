import { Box, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"

const VPageAuthSignInTitle = () => {
    return (<Box width={"full"}>
        <Text fontSize={28} fontWeight={"bold"} textColor={CUtilityColor.gray} textAlign={"left"}>
            {CUtilityString.title.auth.sign_in}
        </Text>
    </Box>)
}

export default VPageAuthSignInTitle