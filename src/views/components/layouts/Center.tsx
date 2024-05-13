import { Box } from "@chakra-ui/react";

const VComponentLayoutCenter: React.FC<MComponentGlobalLayout.Center> = ({
    children
}): JSX.Element => {
    return (<Box
        width={"100%"}
        height={"100vh"}
        position={"relative"}>
        <Box
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        backgroundColor={"white"}
        boxShadow={"0px 0px 4px rgba(0,0,0,0.1)"}
        padding={4}>
            { children }
        </Box>
    </Box>)
}

export default VComponentLayoutCenter