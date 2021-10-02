import "../src/styles/style.css";
import Layout from "./layouts/layout";
import React from "react";

import Principal from "./pages/Principal";
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
import GestionUsuarios from "./pages/GestionUsuarios";
function App() {
  return (

    <Router>
      <Switch>
        <Route path={['/Principal']}>
          <Layout>
            <Switch>
              <Route path='/Principal'>
                <Principal />
              </Route>
            </Switch>
          </Layout>

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
          <Layout>
            <Switch>
              <Route path='/Usuarios'>
                <GestionUsuarios/>
              </Route>
            </Switch>
          </Layout>
        </Route>

        
              <Switch> 
                  <Route path='/'>
                    <Login/>
                  </Route>

                  <Route path='/GestionVentas'>
                    <GestionVentas/>
                  </Route>

                 
              </Switch> 
        

      </Switch>
    </Router>
  );
}

export default App;
