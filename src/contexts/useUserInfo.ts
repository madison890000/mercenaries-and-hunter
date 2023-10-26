import { useEffect, useRef, useState } from 'react';
import * as jose from 'jose';
import sendList from '../lib/SendListData';
import { getUserInfo } from '../services/mh';
import { ONE_WEEK } from '../constants/date';
import cronJobs from '../CronJobs';
import globalStore from '../lib/GlobalData';
import { GOOGLE_TOKEN_KEY } from '../constants/StoreKeys';

const useUserInfo = () => {
  const token = useRef<string | undefined>(globalStore.get(GOOGLE_TOKEN_KEY));
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    exp: 0,
    verified: false,
    picture: '',
    login: false
  });
  const getServerInfo = async () => {
    const data = await getUserInfo();
    if (data?.sends?.length > 0) {
      sendList.setServerData(data?.sends);
    }
  };
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
          login: true
        });
        cronJobs.turnOn();
        getServerInfo();
      } else {
        cronJobs.turnOff();
      }
    }
  };
  const updateToken = async () => {
    token.current = await globalStore.syncGetWithNoCache(GOOGLE_TOKEN_KEY);
    decodeToken();
  };
  useEffect(() => {
    decodeToken();
    window.addEventListener('storage', e => {
      if (e?.key === GOOGLE_TOKEN_KEY) {
        updateToken();
      }
    });
  }, []);
  return {
    userInfo,
    updateToken
  };
};
export default useUserInfo;
