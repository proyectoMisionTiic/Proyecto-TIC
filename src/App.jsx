import "../src/styles/style.css";
import Layout from "./layouts/layout";
import React from "react";
import Principal from "./pages/Principal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/Principal"]}>
          <Layout>
            <Switch>
              <Route path="/Principal">
                <Principal />
              </Route>
            </Switch>
          </Layout>
        </Route>

        <Route path={["/Login"]}>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </Route>

        <Route path={["/usuarios"]}>
          <Layout>
            <Switch>
              <Route path="/usuarios">
                <Usuarios/>
              </Route>
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
