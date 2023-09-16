import React, {Dispatch, PropsWithChildren, SetStateAction, useState} from 'react';
import {APP_LOCALES, LANGUAGE_OPTIONS, LocalesKey} from '../i18n/languages';

interface ILocaleContext {
    locale: LocalesKey;
    updateLocale: Dispatch<SetStateAction<LocalesKey>>;
    languages: { label: string; value: LocalesKey }[];
}

export const LocaleContext = React.createContext({} as ILocaleContext);

const getInitLanguage = (): LocalesKey => {
    if (window.localStorage.getItem('i18n')) {
        return window.localStorage.getItem('i18n') as LocalesKey
    } else {
        const browserLang = window.navigator.language;
        if (Object.keys(APP_LOCALES).includes(browserLang)) {
            return browserLang as LocalesKey
        } else {
            return 'en-US'
        }
    }
}
export const LocaleContextContainer = ({children}: PropsWithChildren) => {
    const [locale, updateLocale] = useState<LocalesKey>(getInitLanguage());
    return (
        <LocaleContext.Provider
            value={{
                locale,
                updateLocale: (e) => {
                    updateLocale(e);
                    window.localStorage.setItem('i18n', e as string)
                },
                languages: LANGUAGE_OPTIONS
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContext;
