import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseMaintenance, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardMaintenanceBody, VPageDashboardMaintenanceDelete, VPageDashboardMaintenanceFilter, VPageDashboardMaintenanceHead } from "./maintenance/index";

const VPageDashboardMaintenance: React.FC = (): JSX.Element => {

    const {
        maintenanceList,
        maintenanceDetail,
        formFilter,
        isLoadingMaintenance,
        setFormFilter,
        setMaintenanceDetail,
        loadMaintenanceList,
        doDeleteMaintenance
    } = CUsecaseMaintenance();

    const { 
        isOpen: isOpenDelete, 
        onClose: onCloseDelete, 
        onOpen: onOpenDelete 
    } = useDisclosure();

    const { 
        isOpen: isOpenFilter, 
        onClose: onCloseFilter, 
        onOpen: onOpenFilter 
    } = useDisclosure();

    const {
        isOpen: isAccessOpen,
        onClose: onCloseAccessOpen,
        onOpen: onOpenAccessOpen
    } = useDisclosure();

    const {
        userAccessByToken,
        loadUserAccess
    } = CUsecaseUserAccess();

    const checkAccess = CUtilityString.function.check_is_valid_access
    
    const [notAccessBack, setIsNotAccessBack] = useState(false);

    const {} = CUtilityLoad(() => {
        loadUserAccess();
    });

    useEffect(() => {
        if (formFilter !== undefined) {
            if (formFilter.is_apply) {
                loadMaintenanceList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("6", "lihat", userAccessByToken)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.maintenance.list.replace(` - ${CUtilityString.title.app}`, "")}
        at={5}>
        { isLoadingMaintenance ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.maintenance.title}
           description={CUtilityString.table.maintenance.description}
           search={{
                placeholder: CUtilityString.table.maintenance.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.maintenance.new,
                onClick: () => {
                    if (!checkAccess("6", "tambah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.maintenance.form.replace(":id", "-1")
                        );
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (maintenanceList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardMaintenanceHead />)}
           body={(<VPageDashboardMaintenanceBody
                items={maintenanceList || []}
                onEdit={(item) => {
                    if (!checkAccess("6", "ubah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.maintenance.form.replace(":id", item.id.toString())
                        );
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("6", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setMaintenanceDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardMaintenanceDelete
            isOpen={isOpenDelete}
            loading={isLoadingMaintenance}
            value={maintenanceDetail}
            onDelete={doDeleteMaintenance}
            onClose={onCloseDelete} />
        <VPageDashboardMaintenanceFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingMaintenance}
            value={formFilter}
            onApply={setFormFilter} />

        <VComponentModal
            isOpen={isAccessOpen}
            size="sm"
            title="Butuh Akses"
            content={(<Text>Maaf anda tidak memilik akses untuk fitur pada menu ini.</Text>)}
            onClose={() => {
                if (!notAccessBack) {
                    onCloseAccessOpen();
                } else CUtilityRouterFunc.back();
            }} />
    </VComponentLayoutDashboard>)
}

export default VPageDashboardMaintenance