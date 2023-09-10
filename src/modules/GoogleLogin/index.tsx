import {GoogleLogin} from '@react-oauth/google';
import {useContext} from "react";
import GlobalContext from "../../contexts/GlobalContext";

const Login = () => {

    const {updateToken} = useContext(GlobalContext);
    return (
        <GoogleLogin
            onSuccess={token => {
                window.localStorage.setItem('google-token', token.credential ?? '');
                updateToken();
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    )
}
export default Login