const CUtilityMeta = () => {
    const setTitle = (new_title: string) => {
        document.title = new_title;
    }
    const getTitle = () => {
        return document.title
    }

    const setFavIcon = (fav_icon_url: string) => {
        var link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.setAttribute("rel", "icon");
            document.head.appendChild(link);
        }
        link.setAttribute("href", fav_icon_url);
    }

    return {
        setTitle,
        setFavIcon,
        
        getTitle,
    };
}

export default CUtilityMeta