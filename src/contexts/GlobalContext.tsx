import React, {PropsWithChildren} from 'react';
import {useScore} from "../hooks/useScore";
import useReload from "../hooks/useReload";
import useUserInfo from "./useUserInfo";

interface ILocaleContext {
    scoreValues: ReturnType<typeof useScore>;
    reload: () => void;
    updateToken: () => void;
    userInfo: any;
}

export const GlobalContext = React.createContext({} as ILocaleContext);


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

export default GlobalContext;
