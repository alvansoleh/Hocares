import { useState } from "react";

const LUsecasePlaceRoom = () => {
    // Setup List
    const [buildingId, setBuildingId] = useState<number>();
    const [floorId, setFloorId] = useState<number>();
    const [roomId, setRoomId] = useState<number>();
    const [roomList, setRoomList] = useState<MApiPlaces.ItemRoom[]>([]);
    const [roomDetail, setRoomDetail] = useState<MApiPlaces.ItemRoom>();
    const [formRoomDetail, setFormRoomDetail] = useState<MUsecasePlacesForm.Room>();
    const [formFilter, setFormFilter] = useState<MComponentGlobalSearch.Filter>();
    const [isLoadingRoom, setIsLoadingRoom] = useState(false);

    // Export Function
    return {
        buildingId,
        floorId,
        roomId,
        roomList,
        roomDetail,
        formRoomDetail,
        formFilter,
        isLoadingRoom,

        setBuildingId,
        setFloorId,
        setRoomId,
        setRoomList,
        setRoomDetail,
        setFormRoomDetail,
        setFormFilter,
        setIsLoadingRoom,
    }
}

export default LUsecasePlaceRoom