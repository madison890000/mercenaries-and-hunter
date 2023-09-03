import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {generatedTranslations} from './i18n/translations';
import LocaleContext, {LocaleContextContainer} from './contexts/LocaleContext';
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Menus from "./modules/Menus";
import Popup from "./Popup";
import SendList from "./SendList";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const RouteMap = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/popup' element={<Popup/>}/>
                <Route path="/" element={
                    <>
                        <Menus/>
                        <Outlet/>
                    </>
                }>
                    <Route path="send" index element={<SendList/>}/>
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
        <I18nProvider/>
    </LocaleContextContainer>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
