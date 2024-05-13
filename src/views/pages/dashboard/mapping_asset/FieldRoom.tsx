import { Box, FormControl, FormLabel, Input, InputGroup, useDisclosure } from "@chakra-ui/react";
import { CUsecasePlaceRoom, CUtilityColor, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardPlaceRoomBodyChoose, VPageDashboardPlaceRoomFilter, VPageDashboardPlaceRoomHead } from "../places";

const VPageDashboardMappingAssetFormRoom: React.FC<MComponentUsecaseMappingAsset.Field> = ({
    value,
    onChange
}): JSX.Element => {

    const {
        floorId,
        roomList,
        roomDetail,
        formFilter,
        isLoadingRoom,
        setFloorId,
        setRoomDetail,
        setFormFilter,
        loadRoomList,
        showMessageWarning,
    } = CUsecasePlaceRoom();

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
            if (formFilter.is_apply && floorId !== undefined && floorId !== -1) {
                loadRoomList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply, floorId])

    useEffect(() => {
        if (value !== undefined && (floorId === undefined || floorId === -1) && value.id_lantai !== undefined && value.id_lantai !== -1) {
            setFloorId(value.id_lantai)
        }
    }, [value])

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.room_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.room_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text"
                isReadOnly={true} 
                placeholder={CUtilityString.forms.room_name.placeholder}
                value={roomDetail?.nama_ruangan || ""}
                onClick={() => {
                    if (floorId !== undefined && floorId !== -1) {
                        onOpenChoose();
                    } else {
                        showMessageWarning(CUtilityString.messages.dashboard.places.floor.choose);
                    }
                }} />
        </InputGroup>

        <VComponentModal
            isOpen={isOpenChoose}
            size="4xl"
            title={`Pilih ${CUtilityString.title.dashboard.asset.list.replace(` - ${CUtilityString.title.app}`, "")}`}
            content={(<Box width={"full"}>
                { isLoadingRoom ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.places.room.title}
           description={CUtilityString.table.places.room.description}
           search={{
                placeholder: CUtilityString.table.places.room.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (roomList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardPlaceRoomHead />)}
           body={(<VPageDashboardPlaceRoomBodyChoose
                items={roomList || []}
                onChoose={(item) => {
                    if (value !== undefined) {
                        setRoomDetail(item);
                        onChange({
                            ...value,
                            id_ruangan: item.id
                        })
                        onCloseChoose();
                    }
                }} />)} />) }
            </Box>)}
            onClose={onCloseChoose} />

        <VPageDashboardPlaceRoomFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingRoom}
            value={formFilter}
            onApply={setFormFilter} />
    </FormControl>)
}

export default VPageDashboardMappingAssetFormRoom