import {useEffect, useRef, useState} from "react";
import * as jose from 'jose'
import {getGoogleToken} from "../utils";
import jobs from "../jobs";
import sendList from "../lib/SendListData";
import {getUserInfo} from "../services/mh";
import {ONE_WEEK} from "../constants/date";


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
    const getServerInfo = async () => {
        const data = await getUserInfo();
        if (data?.sends?.length > 0) {
            sendList.setServerData(data?.sends);
        }
    }
    const updateToken = () => {
        // @ts-ignore
        token.current = getGoogleToken();
        decodeToken();
    }
    const decodeToken = () => {
        if (token.current) {
            const info = jose.decodeJwt(token.current ?? '');
            if (info?.exp && new Date().getTime() < info?.exp * 1000 + ONE_WEEK) {
                setUserInfo({
                    name: info?.name as string,
                    email: info?.email as string,
                    exp: info?.exp as number,
                    verified: info?.email_verified as boolean,
                    picture: info?.picture as string,
                    login: true,
                });
                jobs.turnOn();
                getServerInfo();
            } else {
                jobs.turnOff();
            }
        }
    };
    useEffect(() => {
        decodeToken();
        window.addEventListener('storage', (e) => {
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