import "../src/styles/style.css";
import Layout from "./layouts/layout";
import React from "react";
import Principal from "./pages/Principal";
import InformacionVentas from "./pages/informacionVentas";
import GestionUsuarios from "./pages/GestionUsuarios";
import GestionVentas from "./pages/gestionVentas";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/Principal", "/Ventas", "/InformacionVentas",]}>
          <Layout>
            <Switch>
              <Route path="/Principal">
                <Principal />
              </Route>

              <Route path="/Ventas">
                <GestionVentas />
              </Route>

              <Route path="/InformacionVentas">
                <InformacionVentas />
              </Route>

            </Switch>
          </Layout>
        </Route>

        <Switch>
          <Route path="/">
            <Login />
          </Route>

          <Route path="/GestionVentas">
            <GestionVentas />
          </Route>
        </Switch>


      </Switch>
      <Route path={["/GestionUsuarios"]}>
          <Layout>
            <Switch>
              <Route path="/GestionUsuarios">
                <GestionUsuarios />
              </Route>
            </Switch>
          </Layout>
        </Route>
    </Router>
  );
}

export default App;
