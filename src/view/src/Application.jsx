import React from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Events from "./Events.jsx";
import Translated from "./components/Translated.jsx";

export default function ({}) {
  return <HashRouter>
    <Translated initialLanguage="pl">
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="events" element={<Events/>}/>
          </Route>
        </Routes>
      </Layout>
    </Translated>
  </HashRouter>;
}
