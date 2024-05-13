import { Box, Center, Spinner, Text } from "@chakra-ui/react"
import { CUtilityString } from "controllers"

const VComponentLoader: React.FC = (): JSX.Element => {
    return (<Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        backgroundColor={"white"}
        boxShadow={"0px 0px 4px rgba(0,0,0,0.1)"}
        padding={4}>
        <Center paddingBottom={4}>
            <Spinner size={"md"} />
        </Center>
        <Text textAlign={"center"}>
            {CUtilityString.text.loading}
        </Text>
    </Box>)
}

export default VComponentLoader