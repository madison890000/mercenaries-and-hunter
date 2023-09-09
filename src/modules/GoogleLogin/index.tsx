import {GoogleLogin} from '@react-oauth/google';

const Login = () => (
    <GoogleLogin
        onSuccess={token => {
            console.log(token?.credential);
            window.localStorage.setItem('google-token', token.credential ?? '')
        }}
        onError={() => {
            console.log('Login Failed');
        }}
    />
)
export default Login