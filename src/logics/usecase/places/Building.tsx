import { useState } from "react";

const LUsecasePlaceBuilding = () => {
    // Setup List
    const [buildingId, setBuildingId] = useState<number>();
    const [buildingList, setBuildingList] = useState<MApiPlaces.ItemBuilding[]>([]);
    const [buildingDetail, setBuildingDetail] = useState<MApiPlaces.ItemBuilding>();
    const [formBuildingDetail, setFormBuildingDetail] = useState<MUsecasePlacesForm.Building>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingBuilding, setIsLoadingBuilding] = useState(false);

    // Export Function
    return {
        buildingId,
        buildingList,
        buildingDetail,
        formBuildingDetail,
        formFilter,
        isLoadingBuilding,

        setBuildingId,
        setBuildingList,
        setBuildingDetail,
        setFormBuildingDetail,
        setFormFilter,
        setIsLoadingBuilding,
    }
}

export default LUsecasePlaceBuilding