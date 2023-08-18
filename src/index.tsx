import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {generatedTranslations} from './i18n/translations';
import LocaleContext, {LocaleContextContainer} from './contexts/LocaleContext';
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Preview from "./Home";
import Print from "./Print";
import Editor from "./Editor";
import Menus from "./modules/Menus";
import CoverLetter from "./CoverLetter";
import {GlobalContextContainer} from "./contexts/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const RouteMap = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menus/>
                        <Outlet/>
                    </>
                }>
                    <Route path="/" index element={<Preview/>}/>
                    <Route path="print" index element={<Print/>}/>
                    <Route path="edit" index element={<Editor/>}/>
                    <Route path="cl" index element={<CoverLetter/>}/>
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
    <LocaleContextContainer>
        <GlobalContextContainer>
            <I18nProvider/>
        </GlobalContextContainer>
    </LocaleContextContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
