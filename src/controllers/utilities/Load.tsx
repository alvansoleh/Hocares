import { useState, useEffect } from "react";

const CUtilityLoad = ( onLoad: () => void ) => {
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        setIsLoad(true);
    }, [])

    useEffect(() => {
        if (isLoad) {
            onLoad();
            setIsLoad(false);
        }
    }, [isLoad])

    return {
        isLoad,
        setIsLoad,
    }
}

export default CUtilityLoad