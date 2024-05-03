declare namespace MApiUser {
    interface ResponseINF extends MApiBase.ResponseINF<Item> {
        data: Item[]
    }

    interface ResponseDetailINF extends MApiBase.ResponseINF<Item> {
        data: Item
    }

    interface ResponseWriteINF extends MApiBase.ResponseINF<null> {}

    interface Item extends MApiAuth.Profile {}
    
    interface Form {
        full_name: string;
        username: string;
        password: string?;
        email: string;
        no_hp: string;
    }
}