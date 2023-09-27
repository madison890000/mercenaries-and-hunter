import React, {Dispatch, PropsWithChildren, SetStateAction, useState} from 'react';
import {APP_LOCALES, LANGUAGE_OPTIONS, LocalesKey} from '../i18n/languages';
import globalStore from "../lib/GlobalData";
import {I18N_KEY} from "../constants/StoreKeys";

interface ILocaleContext {
    locale: LocalesKey;
    updateLocale: Dispatch<SetStateAction<LocalesKey>>;
    languages: { label: string; value: LocalesKey }[];
}

const DEFAULT_LOCALE = 'en-US';

export const LocaleContext = React.createContext({} as ILocaleContext);

const getInitLanguage = (): LocalesKey => {
    if (globalStore.get(I18N_KEY)) {
        return globalStore.get(I18N_KEY) as LocalesKey
    } else {
        const browserLang = window.navigator.language;
        if (Object.keys(APP_LOCALES).includes(browserLang)) {
            return browserLang as LocalesKey
        } else {
            return DEFAULT_LOCALE
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
                    globalStore.save(I18N_KEY, e as string)
                },
                languages: LANGUAGE_OPTIONS
            }}
        >
            {children}
        </LocaleContext.Provider>
    );
};

export default LocaleContext;
