import "../src/styles/style.css";
import Layout from "./layouts/layout";
import React from "react";

import Principal from "./pages/Principal";
import InformacionVentas from "./pages/informacionVentas";
import GestionUsuarios from "./pages/GestionUsuarios";
import GestionVentas from "./pages/gestionVentas";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Principal from './pages/Principal';
import InformacionVentas from './pages/informacionVentas';

import GestionVentas from "./pages/gestionVentas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login'

import Login from "./pages/Login";

function App() {
  return (

    <Router>
      <Switch>
        <Route path={["/Principal", "/Ventas", "/InformacionVentas"]}>
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
<<<<<<< HEAD
        </Route>
        <Route path={["/Principal", "/GestionUsuarios"]}>
=======

  <Router>
      <Switch >
        <Route path={['/Principal','/Ventas','/InformacionVentas']}>
            <Layout> 
              <Switch> 
                  <Route path='/Principal'>
                    <Principal/>
                  </Route>

                  <Route path='/Ventas'>
                    <GestionVentas/>
                  </Route>

                  <Route path='/InformacionVentas'>
                    <InformacionVentas/>
                  </Route>

              </Switch> 
            </Layout> 
        </Route>

       
        <Route path={['/Usuarios']}>
>>>>>>> 8edf8f1f28da2620317153f52ca03feb7cd7ccaa
          <Layout>
            <Switch>
              <Route path="/Principal">
                <Principal />
              </Route>

              <Route path="/Usuarios">
                <GestionUsuarios />
              </Route>
            </Switch>
          </Layout>
        </Route>
<<<<<<< HEAD
        <Switch>
          <Route path="/">
            <Login />
          </Route>

          <Route path="/GestionVentas">
            <GestionVentas />
          </Route>
        </Switch>
=======

        
              <Switch> 
                  <Route path='/'>
                    <Login/>
                  </Route>

                  <Route path='/GestionVentas'>
                    <GestionVentas/>
                  </Route>

                 
              </Switch> 
        
>>>>>>> 8edf8f1f28da2620317153f52ca03feb7cd7ccaa

      </Switch>
    </Router>
  );
}

export default App;
