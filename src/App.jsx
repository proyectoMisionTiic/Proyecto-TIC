import "./styles/Style-gestionar-productos.css";
import GestionProductos from "./pages/GestionProductos";
import "../src/styles/style.css";
import Layout from "./layouts/layout";
import React from "react";
import Principal from "./pages/Principal";
import InformacionVentas from "./pages/informacionVentas";
import GestionUsuarios from "./pages/GestionUsuarios";
import GestionVentas from "./pages/gestionVentas";
import VerUsuarios from "./pages/VerUsuarios";
import VerProductos from "./pages/VerProductos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from "./components/privateRoute.jsx";

import Login from "./pages/Login";

function App() {
  return (
    <Auth0Provider
      domain="dev-tic-team.us.auth0.com"
      clientId="SGmvGQ8cUb3RpguTU6Yapeyp12R4b83R"
      redirectUri="https://thawing-stream-94254.herokuapp.com/principal"
      audience="api-gestor-ventas"
    >
      <Router>
        <Switch>
          <Route
            path={[
              "/Principal",
              "/Ventas",
              "/InformacionVentas",
              "/GestionUsuarios",
              "/VerUsuarios",
              "/GestionProductos",
              "/VerProductos",
            ]}
          >
            <PrivateRoute>
              <Layout>
                <Switch>
                  <Route path="/Principal">
                    <Principal />
                  </Route>

                  <Route path="/Ventas">
                    <GestionVentas />
                  </Route>

                  <Route path="/GestionProductos">
                    <GestionProductos />
                  </Route>

                  <Route path="/InformacionVentas">
                    <InformacionVentas />
                  </Route>

                  <Route path="/GestionUsuarios">
                    <GestionUsuarios />
                  </Route>
                  <Route path="/VerProductos">
                    <VerProductos />
                  </Route>

                  <Route path="/VerUsuarios">
                    <VerUsuarios />
                  </Route>
                </Switch>
              </Layout>
            </PrivateRoute>
          </Route>

          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
