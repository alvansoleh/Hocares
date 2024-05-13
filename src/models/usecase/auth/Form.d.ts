declare namespace MUsecaseAuthForm {
    interface Login {
        username: string;
        password: string;
    }

    interface Profile {
        username: string;
        password: string?;
        full_name: string;
        email: string;
        no_hp: string;
    }

    interface Password {
        password: string;
        new_password: string;
        retype_password: string;
    }
}