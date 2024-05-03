import { Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseUser, CUsecaseUserAccess, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect, useState } from "react";
import { VComponentFormQuery, VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentTableBase } from "views/components";
import { VPageDashboardUserBody, VPageDashboardUserDelete, VPageDashboardUserFilter, VPageDashboardUserHead } from "./users/";

const VPageDashboardUser: React.FC = (): JSX.Element => {

    const {
        userList,
        userDetail,
        formFilter,
        isLoadingUser,
        setFormFilter,
        setUserDetail,
        loadUserList,
        doDeleteUser
    } = CUsecaseUser();

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
                loadUserList();
                setFormFilter({
                    ...formFilter,
                    is_apply: false
                });
            }
        }
    }, [formFilter?.is_apply])

    useEffect(() => {
        if (userAccessByToken.length > 0) {
            if (!checkAccess("4", "lihat", userAccessByToken)) {
                setIsNotAccessBack(true);
                onOpenAccessOpen();
            } else {
                setIsNotAccessBack(false);
            }
        }
    }, [userAccessByToken])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.user.list.replace(` - ${CUtilityString.title.app}`, "")}
        at={3}>
        { isLoadingUser ? (<VComponentLoader />) : (<VComponentTableBase 
           title={CUtilityString.table.user.title}
           description={CUtilityString.table.user.description}
           search={{
                placeholder: CUtilityString.table.user.search,
                onClick: () => {
                    onOpenFilter();
                },
           }}
           action={{
                label: CUtilityString.table.user.new,
                onClick: () => {
                    if (!checkAccess("4", "tambah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.user.form.replace(":userId", "-1")
                        );
                    }
                }
           }}
           query={(<VComponentFormQuery filter={formFilter} />)}
           pagination={{
                next: formFilter !== undefined && (userList?.length || 0) === 10 ? () => {
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
           header={(<VPageDashboardUserHead />)}
           body={(<VPageDashboardUserBody
                items={userList || []}
                onManage={(item) => {
                    if (!checkAccess("4", "ubah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.user_access.list.replace(":userId", item.id.toString())
                        );
                    }
                }}
                onEdit={(item) => {
                    if (!checkAccess("4", "ubah", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        CUtilityRouterFunc.to(
                            CUtilityString.path.dashboard.user.form.replace(":userId", item.id.toString())
                        );
                    }
                }}
                onDelete={(item) => {
                    if (!checkAccess("4", "hapus", userAccessByToken)) {
                        setIsNotAccessBack(false);
                        onOpenAccessOpen();
                    } else {
                        setUserDetail(item);
                        onOpenDelete();
                    }
                }} />)} />) }
        <VPageDashboardUserDelete
            isOpen={isOpenDelete}
            loading={isLoadingUser}
            value={userDetail}
            onDelete={doDeleteUser}
            onClose={onCloseDelete} />
        <VPageDashboardUserFilter
            isOpen={isOpenFilter}
            onClose={onCloseFilter}
            loading={isLoadingUser}
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

export default VPageDashboardUser