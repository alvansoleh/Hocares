declare namespace MApiBase {
    interface RequestINF {
        url: string;
        content: any;
        onSuccess: ( json: string ) => void;
        onFailure: ( error: any ) => void;
    }

    interface ResponseINF<K> {
        code?: number;
        status: boolean;
        message: string;
        instruction?: string;
        errors?: string[];
        data?: K
    }
}