import { useToast } from "@chakra-ui/react";

const VComponentToast = () => {
    const toast = useToast();
    const ids = [
        'toast-id-error',
        'toast-id-warning',
        'toast-id-success',
    ];

    const showMessageError = (message: string) => {
        if (!toast.isActive(ids[0]))
        toast({
            id: ids[0],
            status: "error",
            title: "Terjadi kesalahan",
            description: message
        });
    }

    const showMessageWarning = (message: string) => {
        if (!toast.isActive(ids[1]))
        toast({
            id: ids[1],
            status: "warning",
            title: "Perhatian",
            description: message
        });
    }

    const showMessageSuccess = (message: string) => {
        if (!toast.isActive(ids[2]))
        toast({
            id: ids[2],
            status: "success",
            title: "Berhasil",
            description: message
        });
    }

    return {
        showMessageError,
        showMessageWarning,
        showMessageSuccess
    }
}

export default VComponentToast;