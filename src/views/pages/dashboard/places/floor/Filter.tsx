import { Box, Button, HStack, Icon, Spacer, VStack } from "@chakra-ui/react";
import { CUsecasePlaceFloor, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormFilterBy, VComponentFormSearch, VComponentFormSortBy, VComponentModal } from "views/components";

const VPageDashboardPlaceFloorFilter: React.FC<MComponentGlobalSearch.ContainerQuery> = ({
    isOpen,
    loading,
    value,
    onClose,
    onApply
}): JSX.Element => {

    const {
        formFilter,
        setFormFilter
    } = CUsecasePlaceFloor();

    const [filterByActiveIndex, setFilterByActiveIndex] = useState(-1);
    const [sortByActiveIndex, setSortByActiveIndex] = useState(-1);

    const reset = () => {
        return {
            filter_by: "",
            sort_by: "",
            page: 0,
            size: 10,
            query: "",
            is_apply: true
        };
    }

    useEffect(() => {
        if (value !== undefined && isOpen) {
            setFormFilter(value);
            let tempFilterByIndex = -1, tempSortByIndex = -1;
            CUtilityString.forms.filter_by.drop_down.floor.forEach((it, i) => {
                if (it.value === value.filter_by) tempFilterByIndex = i;
            });
            CUtilityString.forms.sort_by.drop_down.forEach((it, i) => {
                if (it.value === value.sort_by) tempSortByIndex = i;
            });
            setFilterByActiveIndex(tempFilterByIndex)
            setSortByActiveIndex(tempSortByIndex);
        } else if (value === undefined && isOpen) {
            setFormFilter(reset());
        }
    }, [value, isOpen])

    return (<VComponentModal
        isOpen={isOpen}
        size="sm"
        title={CUtilityString.title.dashboard.places.floor.filter}
        content={(<VStack spacing={2} width={"full"}>
            <VComponentFormFilterBy
                active_index={filterByActiveIndex}
                options={CUtilityString.forms.filter_by.drop_down.floor}
                onSelect={(i, option) => {
                    if (formFilter !== undefined) {
                        setFilterByActiveIndex(i);
                        setFormFilter({
                            ...formFilter,
                            filter_by: option.value
                        });
                    }
                }} />
            <VComponentFormSortBy
                active_index={sortByActiveIndex}
                options={CUtilityString.forms.sort_by.drop_down}
                onSelect={(i, option) => {
                    if (formFilter !== undefined) {
                        setSortByActiveIndex(i);
                        setFormFilter({
                            ...formFilter,
                            sort_by: option.value
                        });
                    }
                }} />
            <Box width={"full"}>
                <VComponentFormSearch
                    is_can_search={true}
                    label={CUtilityString.forms.query.label}
                    placeholder={CUtilityString.forms.query.placeholder}
                    onSearch={(query) => {
                        if (formFilter !== undefined) {
                            setFormFilter({
                                ...formFilter,
                                query: query
                            });
                        }
                    }} />
            </Box>
        </VStack>)}
        footer={(<HStack width={"full"}>
            <Spacer />
            <Button 
                leftIcon={<Icon as={CUtilityString.buttons.action.reset.icon} />}
                width={"fit-content"}
                colorScheme="gray"
                isLoading={loading}
                isDisabled={loading}
                onClick={() => {
                    if (formFilter !== undefined) {
                        setFormFilter(reset());
                        setFilterByActiveIndex(-1);
                        setSortByActiveIndex(-1);
                        onApply(reset());
                    }
                }}>{CUtilityString.buttons.action.reset.text}</Button>
            <Button 
                leftIcon={<Icon as={CUtilityString.buttons.action.apply.icon} />}
                width={"fit-content"}
                colorScheme="green"
                isLoading={loading}
                isDisabled={loading}
                onClick={() => {
                    if (formFilter !== undefined) {
                        onApply({
                            ...formFilter,
                            is_apply: true
                        });
                    }
                }}>{CUtilityString.buttons.action.apply.text}</Button>
        </HStack>)}
        onClose={onClose} />)
}

export default VPageDashboardPlaceFloorFilter