import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Menus from "./modules/Menus";
import ExportResume from "./ExportResume";
import Preview from "./pages/Home";
import Print from "./pages/Print";
import Editor from "./pages/Editor";
import CoverLetter from "./pages/CoverLetter";
import Websites from "./pages/Websites";
import Score from "./pages/Score";
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
                    <Route path="/" index element={<Editor/>}/>
                    <Route path="copy" index element={<ExportResume/>}/>
                    <Route path="score" index element={<Score/>}/>
                    <Route path="edit" index element={<Preview/>}/>
                    <Route path="cl" index element={<CoverLetter/>}/>
                    <Route path="web" index element={<Websites/>}/>
                    <Route path="send" index element={<SendList/>}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}
export default RouteMap