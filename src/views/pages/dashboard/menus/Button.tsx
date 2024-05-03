import { Button, HStack, Icon, Spacer } from "@chakra-ui/react"
import { CUtilityString } from "controllers"

const VPageDashboardMenuFormButton: React.FC<MComponentUsecaseMenu.Button> = ({
    loading,
    onClick
}): JSX.Element => {

    return (<HStack width={"full"}>
        <Spacer />
        <Button 
            leftIcon={<Icon as={CUtilityString.buttons.action.save.icon} />}
            width={"fit-content"}
            colorScheme="green"
            isLoading={loading}
            isDisabled={loading}
            onClick={onClick}>{CUtilityString.buttons.action.save.text}</Button>
    </HStack>)
}

export default VPageDashboardMenuFormButton