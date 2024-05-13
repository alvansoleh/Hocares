import { Box, FormControl, FormLabel, Input, InputGroup, useDisclosure } from "@chakra-ui/react"
import { CUsecaseAsset, CUtilityColor, CUtilityRouterFunc, CUtilityString } from "controllers"
import { useEffect } from "react";
import { VComponentFormQuery, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components"
import { VPageDashboardAssetHead, VPageDashboardAssetFilter, VPageDashboardAssetBodyChoose } from "../assets/index";

const VPageDashboardMaintenanceFormAsset: React.FC<MComponentUsecaseMaintenance.Field> = ({
    value,
    onChange
}): JSX.Element => {

    const {
        assetId,
        assetList,
        assetDetail,
        formFilter,
        isLoadingAsset,
        setFormFilter,
        setAssetDetail,
        setAssetId,
        loadAssetList,
        loadAssetDetail
    } = CUsecaseAsset();

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
                loadAssetList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply]);

    useEffect(() => {
        if (value !== undefined && value.id_aset !== -1) {
            setAssetId(value.id_aset);
        }
    }, [value])

    useEffect(() => {
        if (assetId !== undefined) {
            loadAssetDetail();
        }
    }, [assetId])

    return (<FormControl 
        width={"full"} isRequired={CUtilityString.forms.asset_name.is_required}>
        <FormLabel fontSize={16} fontWeight={"semibold"} textColor={CUtilityColor.gray}>
            {CUtilityString.forms.asset_name.label}
        </FormLabel>
        <InputGroup>
            <Input type="text"
                isReadOnly={true} 
                placeholder={CUtilityString.forms.asset_name.placeholder}
                value={assetDetail?.nama_aset || ""}
                onClick={onOpenChoose} />
        </InputGroup>

        <VComponentModal
            isOpen={isOpenChoose}
            size="4xl"
            title={`Pilih ${CUtilityString.title.dashboard.asset.list.replace(` - ${CUtilityString.title.app}`, "")}`}
            content={(<Box width={"full"}>
                { isLoadingAsset ? (<VComponentLoader />) : (<VComponentTableBase 
                    title={CUtilityString.table.asset.title}
                    description={CUtilityString.table.asset.description}
                    search={{
                            placeholder: CUtilityString.table.asset.search,
                            onClick: () => {
                                onOpenFilter();
                            },
                    }}
                    query={(<VComponentFormQuery filter={formFilter} />)}
                    pagination={{
                            next: formFilter !== undefined && assetList.length === 10 ? () => {
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
                    header={(<VPageDashboardAssetHead />)}
                    body={(<VPageDashboardAssetBodyChoose
                            items={assetList}
                            onChoose={(item) => {
                                if (value !== undefined) {
                                    setAssetDetail(item);
                                    onChange({
                                        ...value,
                                        id_aset: item.id
                                    });
                                    onCloseChoose();
                                }
                            }} />)} />) }
            </Box>)}
            onClose={onCloseChoose} />
            
        <VPageDashboardAssetFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingAsset}
            value={formFilter}
            onApply={setFormFilter} />
    </FormControl>)
}

export default VPageDashboardMaintenanceFormAsset