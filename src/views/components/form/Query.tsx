import { HStack, Tag, TagLabel, Text } from "@chakra-ui/react"
import { CUtilityString } from "controllers"

const VComponentFormQuery: React.FC<MComponentGlobalSearch.Query> = ({
    filter
}): JSX.Element => {

    return (<HStack width={"full"}>
        <Text fontSize={14} fontWeight={"semibold"} textColor={"gray.500"}>{CUtilityString.text.filter}</Text>
        { filter?.filter_by !== null && (filter?.filter_by?.length || 0) > 0 && (<Tag>
            <TagLabel>{CUtilityString.text.filter_by}{filter?.filter_by}</TagLabel>
        </Tag>) }
        { filter?.sort_by !== null && (filter?.sort_by?.length || 0) > 0 && (<Tag>
            <TagLabel>{CUtilityString.text.sort_by}{filter?.sort_by}</TagLabel>
        </Tag>) }
        { filter?.query !== null && (filter?.query?.length || 0) > 0 && (<Tag>
            <TagLabel>{CUtilityString.text.query}{filter?.query}</TagLabel>
        </Tag>) }
    </HStack>)
}

export default VComponentFormQuery