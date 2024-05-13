import { Box, FormControl, FormLabel, Input, InputGroup, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceBuilding, CUtilityColor, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceBuildingBodyChoose, VPageDashboardPlaceBuildingFilter, VPageDashboardPlaceBuildingHead } from "../places";

const VPageDashboardMappingAssetFormBuilding: React.FC<MComponentUsecaseMappingAsset.Field> = ({
    value,
    onChange
}): JSX.Element => {

    const {
        buildingList,
        buildingDetail,
        formFilter,
        isLoadingBuilding,
        setFormFilter,
        setBuildingDetail,
        loadBuildingList,
    } = CUsecasePlaceBuilding();

    const { 
        isOpen: isOpenChoose, 
        onClose: onCloseChoose, 
        onOpen: onOpenChoose 
    } = useDisclosure();

    const { 
        isOpen: isOpenFilter, 
        onClose: onCloseFilter, 
        onOpen: onOpenFilter 
    } = useDisclosure();

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadBuildingList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.building_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.building_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text"
                isReadOnly={true} 
                placeholder={CUtilityString.forms.building_name.placeholder}
                value={buildingDetail?.nama_gedung || ""}
                onClick={onOpenChoose} />
        </InputGroup>

        <VComponentModal
            isOpen={isOpenChoose}
            size="4xl"
            title={`Pilih ${CUtilityString.title.dashboard.asset.list.replace(` - ${CUtilityString.title.app}`, "")}`}
            content={(<Box width={"full"}>
                { isLoadingBuilding ? (<VComponentLoader />) : (<VComponentTableBase 
            title={CUtilityString.table.places.building.title}
            description={CUtilityString.table.places.building.description}
            search={{
                    placeholder: CUtilityString.table.places.building.search,
                    onClick: () => {
                        onOpenFilter();
                    },
            }}
            query={(<VComponentFormQuery filter={formFilter} />)}
            pagination={{
                    next: formFilter !== undefined && (buildingList?.length || 0) === 10 ? () => {
                        setFormFilter({
                            ...formFilter,
                            page: formFilter.page + 1,
                            is_apply: true
                        });
                    } : undefined,
                    prev: formFilter !== undefined && formFilter.page > 0 ? () => {
                        setFormFilter({
                            ...formFilter,
                            page: formFilter.page - 1,
                            is_apply: true
                        });
                    } : undefined
                }}
            header={(<VPageDashboardPlaceBuildingHead />)}
            body={(<VPageDashboardPlaceBuildingBodyChoose
                    items={buildingList || []}
                    onChoose={(item) => {
                        if (value !== undefined) {
                            setBuildingDetail(item);
                            onChange({
                                ...value,
                                id_gedung: item.id
                            });
                            onCloseChoose();
                        }
                    }} />)} />) }
            </Box>)}
            onClose={onCloseChoose} />
            
        <VPageDashboardPlaceBuildingFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingBuilding}
            value={formFilter}
            onApply={setFormFilter} />
    </FormControl>)
}

export default VPageDashboardMappingAssetFormBuilding