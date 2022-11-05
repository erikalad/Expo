import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';

import Presentación from './components/Presentación';
import SobreNosotros from "./components/SobreNosotros";
import InfoPremios from "./components/InfoPremios";
import EntradasSorteo from "./components/EntradasSorteo";
import Sponsors from "./components/Sponsors";
import AndarProductions from "./components/AndarProductions";
import Redes from "./components/Redes";




function App() {
  return (
    
    <BrowserRouter>
   <div className="App">
      <Nav />
      <Route exact path="/">
      <AndarProductions />
      <SobreNosotros />
      
      <Carrousel />
  
      <Presentación />
      <EntradasSorteo />
      <Premios />
      <InfoPremios />
      <Redes />
      <Sponsors />
      </Route>
      <br/>
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
