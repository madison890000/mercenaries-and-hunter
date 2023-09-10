import GoogleLogin from "../GoogleLogin";
import {PropsWithChildren, useContext} from "react";
import GlobalContext from "../../contexts/GlobalContext";


const LoginWrapper: React.FC<PropsWithChildren> = ({children}) => {
    const {userInfo} = useContext(GlobalContext);
    if (!userInfo?.login) {
        return (
            <GoogleLogin/>
        )
    } else {
        return <>{children}</>
    }

}

export default LoginWrapper