import {useEffect, useRef, useState} from "react";
import * as jose from 'jose'
import {getGoogleToken} from "../utils";


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
    const updateToken = ()=>{
        // @ts-ignore
        token.current = getGoogleToken();
        decodeToken();
    }
    const decodeToken = () => {
        console.log('decodeToken===>')
        if (token.current) {
            const info = jose.decodeJwt(token.current ?? '');
            if (info?.exp && new Date().getTime() < info?.exp * 1000) {
                setUserInfo({
                    name: info?.name as string,
                    email: info?.email as string,
                    exp: info?.exp as number,
                    verified: info?.email_verified as boolean,
                    picture: info?.picture as string,
                    login: true,
                })
            }
        }
    };
    useEffect(() => {
        decodeToken();
        window.addEventListener('storage', (e) => {
            console.log(e)
            if (e?.key === 'google-token') {
                decodeToken();
            }
        })
    }, []);
    return {
        userInfo,
        updateToken,
    }
}
export default useUserInfo