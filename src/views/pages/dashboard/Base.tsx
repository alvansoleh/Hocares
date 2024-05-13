import { Box, Divider, GridItem, SimpleGrid, Text, useDisclosure } from "@chakra-ui/react";
import { CUsecaseReport, CUsecaseUserAccess, CUtilityColor, CUtilityLoad, CUtilityRouterFunc, CUtilityString } from "controllers";
import { useEffect } from "react";
import { VComponentLayoutDashboard, VComponentLoader, VComponentModal, VComponentStat } from "views/components";

const VPageDashboardBase: React.FC = (): JSX.Element => {

    const {
        countAsset,
        countAssetTransaction,
        countPlace,
        countSchedule,

        isLoadingAsset,
        isLoadingAssetTransaction,
        isLoadingPlace,
        isLoadingSchedule,

        loadCountAsset,
        loadCountAssetTransaction,
        loadCountPlace,
        loadCountSchedule
    } = CUsecaseReport();

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

    const {} = CUtilityLoad(() => {
        loadCountPlace();
        loadUserAccess();
    });

    useEffect(() => {
        if (countPlace !== undefined) {
            loadCountAsset();
        }
    }, [countPlace])

    useEffect(() => {
        if (countAsset !== undefined) {
            loadCountAssetTransaction();
        }
    }, [countAsset])

    useEffect(() => {
        if (countAssetTransaction !== undefined) {
            loadCountSchedule();
        }
    }, [countAssetTransaction])

    return (<VComponentLayoutDashboard
        title={CUtilityString.title.dashboard.index.replace(` - ${CUtilityString.title.app}`, "")}
        at={0}>

        <Divider />

        { isLoadingPlace ? (<Box width={"full"} paddingX={4} position={"relative"} height={"120px"}>
            <VComponentLoader />
        </Box>) : (<Box width={"full"} paddingX={4}>
            <Text fontSize={18} fontWeight={"semibold"} textColor={CUtilityColor.gray}>Jumlah dari Tempat</Text>
            <SimpleGrid columns={3} spacing={2} paddingTop={2}>
                <GridItem>
                    <VComponentStat label="Building" value={countPlace?.gedung_count.toString() || "-"} help="Jumlah dari gedung"
                        onClick={() => {
                            if (checkAccess("7", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.place.building);
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Floor" value={countPlace?.lantai_count.toString() || "-"} help="Jumlah dari lantai"
                        onClick={() => {
                            if (checkAccess("8", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.place.floor);
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Room" value={countPlace?.ruangan_count.toString() || "-"} help="Jumlah dari ruangan"
                        onClick={() => {
                            if (checkAccess("9", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.place.room);
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
            </SimpleGrid>
        </Box>) }

        { !isLoadingPlace && (<Divider />) }

        { isLoadingAsset ? (<Box width={"full"} paddingX={4} position={"relative"} height={"120px"}>
            <VComponentLoader />
        </Box>) : (<Box width={"full"} paddingX={4}>
            <Text fontSize={18} fontWeight={"semibold"} textColor={CUtilityColor.gray}>Jumlah dari Aset</Text>
            <SimpleGrid columns={2} spacing={2} paddingTop={2}>
                <GridItem>
                    <VComponentStat label="Available Asset" value={countAsset?.sum_tersedia.toString() || "-"} help={`Dari ${countAsset?.count_tersedia} Aset`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.asset.replace(":type", "tersedia").replace(":mode", "0"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Run Out Asset" value={(Number(`${countAsset?.sum_habis || 0}`) + Number(`${countAsset?.sum_tersedia_0 || 0}`)).toString() || "-"} help={`Dari ${countAsset?.count_habis} Aset`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.asset.replace(":type", "habis").replace(":mode", "1"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
            </SimpleGrid>
        </Box>) }

        { !isLoadingAsset && (<Divider />) }

        { isLoadingAsset ? (<Box width={"full"} paddingX={4} position={"relative"} height={"120px"}>
            <VComponentLoader />
        </Box>) : (<Box width={"full"} paddingX={4}>
            <Text fontSize={18} fontWeight={"semibold"} textColor={CUtilityColor.gray}>Jumlah dari Nilai Aset</Text>
            <SimpleGrid columns={2} spacing={2} paddingTop={2}>
                <GridItem>
                    <VComponentStat label="Nilai Aset Tersedia" value={CUtilityString.function.to_rupiah(countAsset?.value_tersedia || 0) || "-"} help={`Dari ${countAsset?.count_tersedia} Aset`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.asset.replace(":type", "tersedia").replace(":mode", "2"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Nilai Aset Habis" value={CUtilityString.function.to_rupiah(((countAsset?.value_habis || 0) + (countAsset?.value_tersedia_0 || 0))) || "-"} help={`Dari ${countAsset?.count_habis} Aset`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.asset.replace(":type", "habis").replace(":mode", "3"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
            </SimpleGrid>
        </Box>) }

        { !isLoadingAsset && (<Divider />) }

        { isLoadingAssetTransaction ? (<Box width={"full"} paddingX={4} position={"relative"} height={"120px"}>
            <VComponentLoader />
        </Box>) : (<Box width={"full"} paddingX={4}>
            <Text fontSize={18} fontWeight={"semibold"} textColor={CUtilityColor.gray}>Jumlah dari Aset Terpakai</Text>
            <SimpleGrid columns={5} spacing={2} paddingTop={2}>
                <GridItem>
                    <VComponentStat label="Transaksi Masuk" value={CUtilityString.function.masking(countAssetTransaction?.sum_masuk || 0) || "-"} help={`Dari ${CUtilityString.function.masking(countAssetTransaction?.count_masuk || 0)} Transaksi`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.used_asset.replace(":mode", "0"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Transaksi Keluar Karena Dijual" value={CUtilityString.function.masking(countAssetTransaction?.sum_keluar_dijual || 0) || "-"} help={`Dari ${CUtilityString.function.masking(countAssetTransaction?.count_keluar_dijual || 0)} Transaksi`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.used_asset.replace(":mode", "1"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Transaksi Keluar Karena Rusak" value={CUtilityString.function.masking(countAssetTransaction?.sum_keluar_rusak || 0) || "-"} help={`Dari ${CUtilityString.function.masking(countAssetTransaction?.count_keluar_rusak || 0)} Transaksi`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.used_asset.replace(":mode", "2"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Transaksi Keluar Sedang Dipinjam" value={CUtilityString.function.masking(countAssetTransaction?.sum_keluar_pinjam_open || 0) || "-"} help={`Dari ${CUtilityString.function.masking(countAssetTransaction?.count_keluar_pinjam_open || 0)} Transaksi`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.used_asset.replace(":mode", "3"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Transaksi Keluar Sudah Kembali" value={CUtilityString.function.masking(countAssetTransaction?.sum_keluar_pinjam_close || 0) || "-"} help={`Dari ${CUtilityString.function.masking(countAssetTransaction?.count_keluar_pinjam_close || 0)} Transaksi`}
                        onClick={() => {
                            if (checkAccess("10", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.used_asset.replace(":mode", "4"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
            </SimpleGrid>
        </Box>) }

        { !isLoadingAssetTransaction && (<Divider />) }

        { isLoadingSchedule ? (<Box width={"full"} paddingX={4} position={"relative"} height={"120px"}>
            <VComponentLoader />
        </Box>) : (<Box width={"full"} paddingX={4}>
            <Text fontSize={18} fontWeight={"semibold"} textColor={CUtilityColor.gray}>Jumlah dari Jadwal Pemeliharaan</Text>
            <SimpleGrid columns={3} spacing={2} paddingTop={2}>
                <GridItem>
                    <VComponentStat label="Terjadwal" value={countSchedule?.count_terjadwal.toString() || "-"} help="Jumlah dari pemeliharaan terjadwal"
                        onClick={() => {
                            if (checkAccess("1", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.maintenance.replace(":mode", "0"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Sedang Berlangsung" value={countSchedule?.count_berlangsung.toString() || "-"} help="Jumlah dari pemeliharaan sedang berlangsung"
                        onClick={() => {
                            if (checkAccess("1", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.maintenance.replace(":mode", "1"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
                <GridItem>
                    <VComponentStat label="Selesai" value={countSchedule?.count_selesai.toString() || "-"} help="Jumlah dari pemeliharaan selesai"
                        onClick={() => {
                            if (checkAccess("1", "lihat", userAccessByToken)) {
                                CUtilityRouterFunc.to(CUtilityString.path.dashboard.report.maintenance.replace(":mode", "2"));
                            } else onOpenAccessOpen()
                        }} />
                </GridItem>
            </SimpleGrid>
        </Box>) }

        { !isLoadingSchedule && (<Divider />) }

        <VComponentModal
            isOpen={isAccessOpen}
            size="sm"
            title="Butuh Akses"
            content={(<Text>Maaf anda tidak memilik akses untuk fitur pada menu ini.</Text>)}
            onClose={onCloseAccessOpen} />

    </VComponentLayoutDashboard>)
}

export default VPageDashboardBase