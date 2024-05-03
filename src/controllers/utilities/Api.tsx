const CUtilityApi = async (req: MApiBase.RequestINF) => {
    try {
        const response = await fetch(req.url, req.content);
        const result = await response.json();
        req.onSuccess(JSON.stringify(result));
    } catch (e) {
        req.onFailure(e);
    }
}

export default CUtilityApi