import {useEffect, useRef, useState} from "react";
import * as jose from 'jose'

const getGoogleToken = () => {
    // @ts-ignore
    return window.localStorage.getItem('google-token');

}

const useUserInfo = () => {
    const token = useRef<string | undefined>(getGoogleToken());
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        exp: 0,
        verified: false,
        picture: '',
        login: false,
    })
    const decodeToken = () => {
        if (token.current) {
            const info = jose.decodeJwt(token.current ?? '');
            setUserInfo({
                name: info?.name as string,
                email: info?.email as string,
                exp: info?.exp as number,
                verified: info?.email_verified as boolean,
                picture: info?.picture as string,
                login: true,
            })
        }
    };
    useEffect(() => {
        decodeToken();
    }, [])
    return {
        userInfo,
    }
}
export default useUserInfo