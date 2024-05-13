import { CUtilityApi, CUtilityString } from "controllers/utilities";
import { LTemp } from "logics";

const CApiAssets = () => {

    const { token } = LTemp();

    const getAssetListReq = (filter: MComponentGlobalSearch.Filter, callback: (data: MApiAssets.ResponseAssetItemINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.list(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseAssetItemINF = JSON.parse(result) as MApiAssets.ResponseAssetItemINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }
    
    const getAssetUsedListReq = (aset_id: number, filter: MComponentGlobalSearch.Filter, callback: (data: MApiAssets.ResponseAssetItemUsedINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.list_used(aset_id, filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseAssetItemUsedINF = JSON.parse(result) as MApiAssets.ResponseAssetItemUsedINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getAssetUsedListAllReq = (filter: string, callback: (data: MApiAssets.ResponseAssetItemUsedINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.list_used_all(filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseAssetItemUsedINF = JSON.parse(result) as MApiAssets.ResponseAssetItemUsedINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }
    
    const getAssetMappingListReq = (aset_id: number, filter: MComponentGlobalSearch.Filter, callback: (data: MApiAssets.ResponseAssetItemMappingINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.list_mapping(aset_id, filter),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseAssetItemMappingINF = JSON.parse(result) as MApiAssets.ResponseAssetItemMappingINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const getAssetDetailReq = (aset_id: number, callback: (data: MApiAssets.ResponseDetailINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.detail(aset_id),
            content: {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseDetailINF = JSON.parse(result) as MApiAssets.ResponseDetailINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newAssetReq = (body: MUsecaseAssetsForm.Asset, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.new,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newAssetUsedInReq = (body: MUsecaseAssetsForm.AssetUsed, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.new_used_in,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newAssetUsedOutReq = (body: MUsecaseAssetsForm.AssetUsed, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.new_used_out,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const closeAssetUsedOutReq = (body: MUsecaseAssetsForm.CloseUsed, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.close_used,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const newAssetMappingInReq = (body: MUsecaseAssetsForm.AssetMapping, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.new_mapping,
            content: {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const updateAssetReq = (aset_id: number, body: MUsecaseAssetsForm.Asset, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.edit(aset_id),
            content: {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
                body: JSON.stringify(body)
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteAssetReq = (aset_id: number, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.delete(aset_id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    const deleteAssetMappingReq = (id: number, callback: (data: MApiAssets.ResponseWriteINF) => void) => {
        CUtilityApi({ 
            url: CUtilityString.api.assets.delete_mapping(id),
            content: {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token.get()
                },
            },
            onSuccess: (result) => {
                const data: MApiAssets.ResponseWriteINF = JSON.parse(result) as MApiAssets.ResponseWriteINF;
                // Callback
                callback(data);
            },
            onFailure(error) {
                console.log(error);
            },
        })
    }

    return {
        getAssetListReq,
        getAssetUsedListReq,
        getAssetUsedListAllReq,
        getAssetMappingListReq,
        getAssetDetailReq,
        newAssetReq,
        newAssetUsedInReq,
        newAssetUsedOutReq,
        closeAssetUsedOutReq,
        newAssetMappingInReq,
        updateAssetReq,
        deleteAssetReq,
        deleteAssetMappingReq
    }

}

export default CApiAssets