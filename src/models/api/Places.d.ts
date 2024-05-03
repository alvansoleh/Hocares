declare namespace MApiPlaces {
    interface ResponseBuildingINF extends MApiBase.ResponseINF<ItemBuilding> {
        data: ItemBuilding[]
    }

    interface ResponseFloorINF extends MApiBase.ResponseINF<ItemFloor> {
        data: ItemFloor[]
    }

    interface ResponseRoomINF extends MApiBase.ResponseINF<ItemRoom> {
        data: ItemRoom[]
    }

    interface ResponseDetailBuildingINF extends MApiBase.ResponseINF<ItemBuilding> {
        data: ItemBuilding
    }
    
    interface ResponseDetailFloorINF extends MApiBase.ResponseINF<ItemFloor> {
        data: ItemFloor
    }
    
    interface ResponseDetailRoomINF extends MApiBase.ResponseINF<ItemRoom> {
        data: ItemRoom
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface ItemBuilding {
        id: number;
        nama_gedung: string;
        is_delete: number;
    }

    interface ItemFloor {
        id: number;
        nama_lantai: string;
        id_gedung: number;
        is_delete: number;
        nama_gedung: string;
    }

    interface ItemRoom {
        id: number;
        nama_ruangan: string;
        id_lantai: number;
        is_delete: number;
        nama_lantai: string;
        nama_gedung: string;
    }
}