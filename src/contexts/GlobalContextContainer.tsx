import React, {PropsWithChildren} from 'react';
import {useScore} from "../hooks/useScore";
import useReload from "../hooks/useReload";
import useUserInfo from "./useUserInfo";
import GlobalContext from './GlobalContext';


export const GlobalContextContainer = ({children}: PropsWithChildren) => {
    const {userInfo, updateToken} = useUserInfo();
    const reload = useReload();
    const scoreValues = useScore();

    return (
        <GlobalContext.Provider
            value={{
                scoreValues,
                userInfo,
                reload,
                updateToken
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

