
import { Box, Button, HStack, Icon, Spacer, Text, VStack } from "@chakra-ui/react";
import { CUtilityColor } from "controllers";
import { FiChevronLeft, FiChevronRight, FiPlus } from "react-icons/fi";
import { VComponentFormSearch } from "../form";

const VComponentTableBase: React.FC<MComponentGlobalTable.Properties> = ({
    title,
    description,
    search,
    action,
    header,
    query,
    body,
    pagination
}): JSX.Element => {

    return (<VStack spacing={4} width={"full"} paddingX={4}
    position={"relative"}>
        <HStack width={"full"} 
            paddingTop={4}>
            <Box flex={(search?.placeholder?.length || 0) > 20 ? 2 : 3}>
                <Text fontWeight={"semibold"} fontSize={16} textColor={"gray.600"}>{title}</Text>
                <Text fontSize={13} textColor={"gray.400"}>{description}</Text>
            </Box>
            <Box flex={1}
                cursor={search?.onClick !== undefined ? "pointer" : "auto"} 
                onClick={search?.onClick}>
                    {search !== undefined && (
                    <VComponentFormSearch
                        placeholder={search?.placeholder || ""}
                        is_can_search={search?.onSearch !== undefined}
                        onSearch={search?.onSearch} />
                    )}
            </Box>
            {action && (<Box>
                <Button aria-label="New Button" size={"md"} backgroundColor={CUtilityColor.federal}
                textColor={"white"}
                leftIcon={action.icon !== undefined ? (action.icon) : (<Icon as={FiPlus} />)}
                onClick={action?.onClick}>{action?.label}</Button>
            </Box>)}
        </HStack>
        {pagination !== undefined && (<HStack width={"full"}>
            {query}
            <Spacer />
            <Button aria-label="Prev Button"
                size={"sm"}
                backgroundColor={CUtilityColor.white}
                borderWidth={"1px"}
                borderColor={"rgba(0,0,0,0.1)"}
                leftIcon={(<Icon as={FiChevronLeft} />)}
                isDisabled={pagination.prev === undefined}
                onClick={pagination.prev}>Sebelumnya</Button>
            <Button aria-label="Next Button"
                size={"sm"}
                backgroundColor={CUtilityColor.white}
                borderWidth={"1px"}
                borderColor={"rgba(0,0,0,0.1)"}
                rightIcon={(<Icon as={FiChevronRight} />)}
                isDisabled={pagination.next === undefined}
                onClick={pagination.next}>Selanjutnya</Button>
        </HStack>)}
        {header}
        <Box width={"full"}>
            {body}
        </Box>
    </VStack>);
}

export default VComponentTableBase