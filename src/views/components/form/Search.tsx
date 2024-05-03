/**
 * Vi   => Views
 * Com  => Components
 * App  => App Bar
 * Search
 */

import { FormControl, FormLabel, HStack, Icon, IconButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { CUtilityColor } from "controllers";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const VComponentFormSearch: React.FC<MComponentGlobalSearch.Container> = ({
    placeholder,
    is_can_search,
    label,
    onSearch
}): JSX.Element => {
    const [search, setSearch] = useState("");

    return (<HStack>
        <FormControl>
            { label !== undefined && (<FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
                {label}
            </FormLabel>) }
            <InputGroup>
                <InputLeftElement>
                    <Icon as={FaSearch} color={"gray.500"} />
                </InputLeftElement>
                <Input type={"search"} placeholder={placeholder}
                    textColor={"gray.500"}
                    isReadOnly={!is_can_search}
                    cursor={!is_can_search ? "pointer" : "auto"}
                    onChange={(e) => {
                        if (onSearch !== undefined) {
                            if (is_can_search && label === undefined) setSearch(e.target.value);
                            if (is_can_search && label !== undefined) {
                                setSearch(e.target.value);
                                onSearch(e.target.value);
                            }
                        }
                    }} />
            </InputGroup>
        </FormControl>
        { is_can_search && label === undefined && (<IconButton 
        aria-label="Search"
        colorScheme="blue"
        icon={<Icon as={FiSearch} />}
        onClick={() => { 
            if (onSearch !== undefined) {
                if (is_can_search) onSearch(search);
            }
        }} />) }
    </HStack>)
}

export default VComponentFormSearch