import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Menus from "./modules/Menus";
import ImportResume from "./pages/ImportResume";
import EditResume from "./pages/EditResume";
import Print from "./pages/Print";
import Translate from "./pages/Translate";
import CoverLetter from "./pages/CoverLetter";
import Websites from "./pages/Websites";
import SendList from "./pages/SendList";
import React from "react";
import WithPaddingLayout from "./layouts/WithPaddingLayout";


const RouteMap = () => {
    return (
        <HashRouter>
            <Routes>

                <Route path="print" index element={<Print/>}/>
                <Route path="/" element={
                    <>
                        <Menus/>
                        <WithPaddingLayout>
                            <Outlet/>
                        </WithPaddingLayout>
                    </>
                }>
                    <Route path="/" index element={<Translate/>}/>
                    <Route path="import" index element={<ImportResume/>}/>
                    <Route path="edit" index element={<EditResume/>}/>
                    <Route path="cl" index element={<CoverLetter/>}/>
                    <Route path="web" index element={<Websites/>}/>
                    <Route path="send" index element={<SendList/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default RouteMap