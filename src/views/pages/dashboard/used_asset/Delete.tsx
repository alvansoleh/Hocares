import { Box, Button, HStack, Icon, Spacer, Text } from "@chakra-ui/react"
import { CUtilityColor, CUtilityString } from "controllers"
import { VComponentModal } from "views/components"

const VPageDashboardUsedAssetDelete: React.FC<MComponentUsecaseUsedAsset.Delete> = ({
    isOpen,
    loading,
    value,
    onClose,
    onDelete
}): JSX.Element => {

    return (<VComponentModal
        isOpen={isOpen}
        size="sm"
        title={CUtilityString.title.dashboard.used_asset.delete}
        content={(<Box width={"full"}>
            {value !== undefined && (<Text fontSize={14} textColor={CUtilityColor.gray} dangerouslySetInnerHTML={{ 
                __html: CUtilityString.messages.dashboard.used_asset.close(value.id)
            }}  />)}
        </Box>)}
        footer={(<HStack width={"full"}>
            <Spacer />
            <Button 
                leftIcon={<Icon as={CUtilityString.buttons.action.apply.icon} />}
                width={"fit-content"}
                colorScheme="green"
                isLoading={loading}
                isDisabled={loading}
                onClick={onDelete}>{CUtilityString.buttons.action.apply.text}</Button>
        </HStack>)}
        onClose={onClose} />)
}

export default VPageDashboardUsedAssetDelete