import { Box, FormControl, FormLabel, Input, InputGroup, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceFloor, CUtilityColor, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceFloorBodyChoose, VPageDashboardPlaceFloorFilter, VPageDashboardPlaceFloorHead } from "../places";

const VPageDashboardMappingAssetFormFloor: React.FC<MComponentUsecaseMappingAsset.Field> = ({
    value,
    onChange
}): JSX.Element => {

    const {
        buildingId,
        floorList,
        floorDetail,
        formFilter,
        isLoadingFloor,
        setBuildingId,
        setFormFilter,
        setFloorDetail,
        loadFloorList,
        showMessageWarning,
    } = CUsecasePlaceFloor();

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
            if (formFilter.is_apply && buildingId !== undefined && buildingId !== -1) {
                loadFloorList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply, buildingId])

    useEffect(() => {
        if (value !== undefined && (buildingId === undefined || buildingId === -1) && value.id_gedung !== -1) {
            setBuildingId(value.id_gedung)
        }
    }, [value])

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.floor_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.floor_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text"
                isReadOnly={true} 
                placeholder={CUtilityString.forms.floor_name.placeholder}
                value={floorDetail?.nama_lantai || ""}
                onClick={() => {
                    if (buildingId !== undefined && buildingId !== -1) {
                        onOpenChoose();
                    } else {
                        showMessageWarning(CUtilityString.messages.dashboard.places.building.choose);
                    }
                }} />
        </InputGroup>

        <VComponentModal
            isOpen={isOpenChoose}
            size="4xl"
            title={`Pilih ${CUtilityString.title.dashboard.asset.list.replace(` - ${CUtilityString.title.app}`, "")}`}
            content={(<Box width={"full"}>
                { isLoadingFloor ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.floor.title}
           description={CUtilityString.table.places.floor.description}
           search={{
                placeholder: CUtilityString.table.places.floor.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (floorList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceFloorHead />)}
           body={(<VPageDashboardPlaceFloorBodyChoose
                items={floorList || []}
                onChoose={(item) => {
                    if (value !== undefined) {
                        setFloorDetail(item);
                        onChange({
                            ...value,
                            id_lantai: item.id
                        });
                        onCloseChoose();
                    }
                }} />)} />) }
            </Box>)}
            onClose={onCloseChoose} />

            <VPageDashboardPlaceFloorFilter
                isOpen={isOpenFilter}
                onClose={onCloseFilter}
                loading={isLoadingFloor}
                value={formFilter}
                onApply={setFormFilter} />
    </FormControl>)
}

export default VPageDashboardMappingAssetFormFloor