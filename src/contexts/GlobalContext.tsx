import React, {PropsWithChildren, useContext, useRef} from 'react';
import Person from "../models/Person";
import defaultPerson from "../DefaultPerson";
import {useScore} from "../hooks/useScore";
import useReload from "../models/hooks/useReload";

interface ILocaleContext {
    person: Person;
    scoreValues: ReturnType<typeof useScore>;
    reloadPerson: () => void;
}

export const GlobalContext = React.createContext({} as ILocaleContext);

const getStorePerson = () => {
    // @ts-ignore
    return window.localStorage.getItem('resume') !== null ? new Person(JSON.parse(window.localStorage.getItem('resume'))) : defaultPerson;
}
export const GlobalContextContainer = ({children}: PropsWithChildren) => {
    const person = useRef<Person>(getStorePerson());
    const reload = useReload();
    const {person: globalPerson} = useContext(GlobalContext);
    const scoreValues = useScore();
    const reloadPerson = () => {
        person.current = getStorePerson();
        reload();
    }
    return (
        <GlobalContext.Provider
            value={{
                person: person.current,
                scoreValues,
                reloadPerson
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
