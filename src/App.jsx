import "./styles/style.css";
import "./styles/Style-gestionar-productos.css";

import Layout from './layouts/layout'
import React from "react";
import Principal from './pages/Principal'
import GestionProductos from "./pages/GestionProductos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login'



function App() {
  return (

  <Router>
      <Switch >
      <Route path={['/Principal']}>
            <Layout> 
              <Switch> 
                  <Route path='/Principal'>
                    <Principal/>
                  </Route>
              </Switch> 
            </Layout> 
        </Route>

        <Route path={['/Productos']}> 
        <Layout> 
              <Switch> 
                  <Route path='/Productos'>
                    <GestionProductos/>
                  </Route>
              </Switch> 
              </Layout> 
        </Route>

        


        <Route path={['/Login']}>
              <Switch> 
                  <Route path='/Login'>
                    <Login/>
                  </Route>
              </Switch> 
        
        </Route>
      </Switch>

      






  </Router>




  );
}

export default App;
