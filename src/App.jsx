
import "./styles/Style-gestionar-productos.css";
import GestionProductos from "./pages/GestionProductos";

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
        <Route path={["/Principal", "/Ventas", "/InformacionVentas", "/GestionUsuarios"]}>
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

              <Route path="/GestionUsuarios">
                <GestionUsuarios />
              </Route>
            </Switch>
          </Layout>
        </Route>

        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        
      </Switch>
    </Router>
  );
}

export default App;
