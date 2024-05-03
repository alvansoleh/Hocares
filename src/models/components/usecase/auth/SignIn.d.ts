declare namespace MComponentUsecaseAuthSignIn {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Field {
        onChange: (value: string) => void; 
    }
}