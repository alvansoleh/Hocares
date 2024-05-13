import { CUtilityMeta, CUtilityString } from "controllers";
import { VComponentLayoutMiddleware } from "views/components";

const VPageHome: React.FC = (): JSX.Element => {

    const { setTitle } = CUtilityMeta();

    setTitle(CUtilityString.title.home);

    return (<VComponentLayoutMiddleware />)
}

export default VPageHome