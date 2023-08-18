import React, {PropsWithChildren, useRef} from 'react';
import Person from "../models/Person";
import defaultPerson from "../DefaultPerson";

interface ILocaleContext {
    person: Person;
}

export const GlobalContext = React.createContext({} as ILocaleContext);
// @ts-ignore
const storePerson = window.localStorage.getItem('resume') !== null ? new Person(JSON.parse(window.localStorage.getItem('resume'))) : defaultPerson;


export const GlobalContextContainer = ({children}: PropsWithChildren) => {
    const person = useRef<Person>(storePerson);
    return (
        <GlobalContext.Provider
            value={{
                person: person.current,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
