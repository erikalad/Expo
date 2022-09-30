import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Presentación from './components/Presentación';

import CuentaRegresiva from './components/CuentaRegresiva';
import SobreNosotros from "./components/SobreNosotros";
import InfoPremios from "./components/InfoPremios";
import EntradasSorteo from "./components/EntradasSorteo";




function App() {
  return (
    
    <BrowserRouter>
   <div className="App">
      <Nav />
      <Route exact path="/">
      <CuentaRegresiva />
      <Carrousel />
      <Presentación />
   
      <SobreNosotros />
      
      <Premios />
      <InfoPremios />
      <Info />
      <EntradasSorteo />
      </Route>
      <br/>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
