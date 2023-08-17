import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {generatedTranslations} from './i18n/translations';
import LocaleContext, {LocaleContextContainer} from './contexts/LocaleContext';
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Preview from "./Home";
import defaultPerson from "./DefaultPerson";
import Person from "./models/Person";
import Print from "./Print";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// @ts-ignore
const storePerson = window.localStorage.getItem('resume') !== null ? new Person(JSON.parse(window.localStorage.getItem('resume'))) : defaultPerson;
// @ts-ignore
window.storePerson = storePerson;

const RouteMap = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Outlet/>
                    </>
                }>
                    <Route path="preview" index element={<Preview/>}/>
                    <Route path="print" index element={<Print/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}
const I18nProvider = () => {
    const {locale} = useContext(LocaleContext);
    return (
        <IntlProvider locale={locale} key={locale} messages={generatedTranslations()[locale]}>
            <RouteMap/>
        </IntlProvider>
    );
};
root.render(
    <React.StrictMode>
        <LocaleContextContainer>
            <I18nProvider/>
        </LocaleContextContainer>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
