import {GoogleLogin} from '@react-oauth/google';
import {useContext} from "react";
import GlobalContext from "../../contexts/GlobalContext";
import globalStore from "../../lib/GlobalData";
import {GOOGLE_TOKEN_KEY} from "../../constants/StoreKeys";

const Login = () => {
    const {updateToken} = useContext(GlobalContext);
    return (
        <GoogleLogin
            onSuccess={token => {
                globalStore.save(GOOGLE_TOKEN_KEY,token.credential ?? '')
                updateToken();
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}
export default Login