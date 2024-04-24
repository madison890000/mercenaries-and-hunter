import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import Menus from "./modules/Menus";
import SendList from "./pages/SendList";
import React from "react";
import WithPaddingLayout from "./layouts/WithPaddingLayout";


const RouteMap = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Menus/>
            <WithPaddingLayout>
              <Outlet/>
            </WithPaddingLayout>
          </>
        }>
          <Route path="/" index element={<SendList/>}/>
          <Route path="send" index element={<SendList/>}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}
export default RouteMap