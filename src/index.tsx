import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Demo from './Demo';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {generatedTranslations} from './i18n/translations';
import Menus from './modules/Menus';
import LocaleContext, {LocaleContextContainer} from './contexts/LocaleContext';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const RouteMap = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <>
                        <Menus/>
                        <Outlet/>
                    </>
                }>

                    <Route path="home" element={<Home/>}/>
                    <Route path="components" element={<Demo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
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
