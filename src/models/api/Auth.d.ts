declare namespace MApiAuth {
    interface ResponseINF extends MApiBase.ResponseINF<Token> {
        data: Token
    }

    interface ResponseProfileINF extends MApiBase.ResponseINF<Profile> {
        data: Profile
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Token {
        token: string;
    }

    interface Profile {
        id: number;
        full_name: string;
        username: string;
        email: string;
        no_hp: string;
        is_delete: boolean;
    }
}