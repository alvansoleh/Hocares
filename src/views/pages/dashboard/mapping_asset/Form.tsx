import { SimpleGrid, TabPanel } from "@chakra-ui/react";
import VPageDashboardMappingAssetFormButton from "./Button";
import VPageDashboardMappingAssetFormAsset from "./FieldAsset";
import VPageDashboardMappingAssetFormBuilding from "./FieldBuilding";
import VPageDashboardMappingAssetFormFloor from "./FieldFloor";
import VPageDashboardMappingAssetFormRoom from "./FieldRoom";

const VPageDashboardMappingAssetForm: React.FC<MComponentUsecaseMappingAsset.Container> = ({
    loading,
    value,
    onClick,
    onChange
}): JSX.Element => {

    return (<TabPanel>
        <SimpleGrid gap={4} width={"container.sm"} columns={1}>
            <VPageDashboardMappingAssetFormAsset value={value} onChange={onChange} />
            <VPageDashboardMappingAssetFormBuilding value={value} onChange={onChange} />
            <VPageDashboardMappingAssetFormFloor value={value} onChange={onChange} />
            <VPageDashboardMappingAssetFormRoom value={value} onChange={onChange} />
            <VPageDashboardMappingAssetFormButton loading={loading} onClick={onClick} />
        </SimpleGrid>
    </TabPanel>)
}

export default VPageDashboardMappingAssetForm