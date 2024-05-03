import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiPlaces = () => {

    const { token } = LTemp();

    const getBuildingListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseBuildingINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.building.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseBuildingINF = JSON.parse(result) as MApiPlaces.ResponseBuildingINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getFloorListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseFloorINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseFloorINF = JSON.parse(result) as MApiPlaces.ResponseFloorINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getBuildingFloorListReq = (building_id: number, filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseFloorINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.list_building(building_id, filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseFloorINF = JSON.parse(result) as MApiPlaces.ResponseFloorINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getBuildingFloorListAllReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseFloorINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseFloorINF = JSON.parse(result) as MApiPlaces.ResponseFloorINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getRoomListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseRoomINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseRoomINF = JSON.parse(result) as MApiPlaces.ResponseRoomINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getFloorRoomListReq = (floor_id: number, filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseRoomINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.list_lantain(floor_id, filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseRoomINF = JSON.parse(result) as MApiPlaces.ResponseRoomINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getFloorRoomListAllReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiPlaces.ResponseRoomINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseRoomINF = JSON.parse(result) as MApiPlaces.ResponseRoomINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getBuildingDetailReq = (building_id: number, callback: (data: MApiPlaces.ResponseDetailBuildingINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.building.detail(building_id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseDetailBuildingINF = JSON.parse(result) as MApiPlaces.ResponseDetailBuildingINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getFloorDetailReq = (floor_id: number, callback: (data: MApiPlaces.ResponseDetailFloorINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.detail(floor_id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseDetailFloorINF = JSON.parse(result) as MApiPlaces.ResponseDetailFloorINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }
    
    const getRoomDetailReq = (room_id: number, callback: (data: MApiPlaces.ResponseDetailRoomINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.detail(room_id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseDetailRoomINF = JSON.parse(result) as MApiPlaces.ResponseDetailRoomINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newBuildingReq = (body: MUsecasePlacesForm.Building, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.building.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newFloorReq = (body: MUsecasePlacesForm.Floor, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newRoomReq = (body: MUsecasePlacesForm.Room, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateBuildingReq = (building_id: number, body: MUsecasePlacesForm.Building, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.building.edit(building_id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateFloorReq = (floor_id: number, body: MUsecasePlacesForm.Floor, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.edit(floor_id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateRoomReq = (room_id: number, body: MUsecasePlacesForm.Room, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.edit(room_id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteBuildingReq = (building_id: number, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.building.delete(building_id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteFloorReq = (floor_id: number, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.floor.delete(floor_id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteRoomReq = (room_id: number, callback: (data: MApiPlaces.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.places.room.delete(room_id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiPlaces.ResponseWriteINF = JSON.parse(result) as MApiPlaces.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getBuildingListReq,
        getFloorListReq,
        getBuildingFloorListReq,
        getBuildingFloorListAllReq,
        getRoomListReq,
        getFloorRoomListReq,
        getFloorRoomListAllReq,
        getBuildingDetailReq,
        getFloorDetailReq,
        getRoomDetailReq,
        newBuildingReq,
        newFloorReq,
        newRoomReq,
        updateBuildingReq,
        updateFloorReq,
        updateRoomReq,
        deleteBuildingReq,
        deleteFloorReq,
        deleteRoomReq
    }

}

export default CApiPlaces