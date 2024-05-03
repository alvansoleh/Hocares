import { useState } from "react";

const LUsecasePlaceFloor = () => {
    // Setup List
    const [buildingId, setBuildingId] = useState<number>();
    const [floorId, setFloorId] = useState<number>();
    const [floorList, setFloorList] = useState<MApiPlaces.ItemFloor[]>([]);
    const [floorDetail, setFloorDetail] = useState<MApiPlaces.ItemFloor>();
    const [formFloorDetail, setFormFloorDetail] = useState<MUsecasePlacesForm.Floor>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingFloor, setIsLoadingFloor] = useState(false);

    // Export Function
    return {
        buildingId,
        floorId,
        floorList,
        floorDetail,
        formFloorDetail,
        formFilter,
        isLoadingFloor,

        setBuildingId,
        setFloorId,
        setFloorList,
        setFloorDetail,
        setFormFloorDetail,
        setFormFilter,
        setIsLoadingFloor,
    }
}

export default LUsecasePlaceFloor