declare namespace MComponentUsecaseAuthProfile {
    interface Button {
        loading: boolean;
        onClick: () => void;
    }

    interface Field {
        value?: MUsecaseAuthForm.Profile;
        onChange?: (value: MUsecaseAuthForm.Profile) => void; 
    }
    
    interface FieldPassword {
        value?: MUsecaseAuthForm.Password;
        onChange?: (value: MUsecaseAuthForm.Password) => void; 
    }

    interface Container {
        loading: boolean;
        value?: MUsecaseAuthForm.Profile;
        onClick: () => void;
        onChange?: (value: MUsecaseAuthForm.Profile) => void; 
    }
    
    interface ContainerPassword {
        loading: boolean;
        value?: MUsecaseAuthForm.Password;
        onClick: () => void;
        onChange?: (value: MUsecaseAuthForm.Password) => void; 
    }
}