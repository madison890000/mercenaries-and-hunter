import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {generatedTranslations} from './i18n/translations';
import LocaleContext, {LocaleContextContainer} from './contexts/LocaleContext';
import {GlobalContextContainer} from "./contexts/GlobalContext";
import RouteMap from "./Routes";
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


const I18nProvider = () => {
    const {locale} = useContext(LocaleContext);
    return (
        <IntlProvider locale={locale} key={locale} messages={generatedTranslations()[locale]}>
            <RouteMap/>
        </IntlProvider>
    );
};
root.render(
    <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH2_CLIENT_ID ?? ''}
    >
        <LocaleContextContainer>
            <GlobalContextContainer>
                <I18nProvider/>
            </GlobalContextContainer>
        </LocaleContextContainer>
    </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
