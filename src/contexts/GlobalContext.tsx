import React, {PropsWithChildren, useRef} from 'react';
import Person from "../models/Person";
import defaultPerson from "../DefaultPerson";
import {useScore} from "../hooks/useScore";
import madison from "../Madison";

interface ILocaleContext {
    person: Person;
    scoreValues: ReturnType<typeof useScore>;
}

export const GlobalContext = React.createContext({} as ILocaleContext);
// @ts-ignore
const storePerson = window.localStorage.getItem('resume') !== null ? new Person(JSON.parse(window.localStorage.getItem('resume'))) : madison;


export const GlobalContextContainer = ({children}: PropsWithChildren) => {
    const person = useRef<Person>(storePerson);
    const scoreValues = useScore();
    return (
        <GlobalContext.Provider
            value={{
                person: person.current,
                scoreValues,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
