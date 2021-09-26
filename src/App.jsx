
import '../src/styles/style.css';
import Layout from './layouts/layout'
import React from "react";
import Principal from './pages/Principal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/Login'



function App() {
  return (
    <div className='' >
       <Layout>
         <Principal/>
      </Layout>
      
    </div>
    
  );
}

export default App;
