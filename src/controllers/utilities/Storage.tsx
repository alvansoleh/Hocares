const CUtilityStorage = () => {
    const save = (name: string, data: string) => {
        window.localStorage.setItem(name, data);
    }

    const remove = (name: string) => {
        window.localStorage.removeItem(name);
    }

    function get<T> (name: string): T | null {
        const temp = window.localStorage.getItem(name) || "";
        if (temp.length === 0) return null;
        
        const data: T = JSON.parse(temp) as T;
        return data;
    }

    function getString (name: string): string | null {
        const temp = window.localStorage.getItem(name) || "";
        if (temp.length === 0) return null;
        
        return temp;
    }

    return {
        save,
        remove,
        get,
        getString
    }
}

export default CUtilityStorage