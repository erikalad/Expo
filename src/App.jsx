import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Formulario from './components/Formulario';
import Presentación from './components/Presentación';
import EntradasSorteo from './components/EntradasSorteo';
import CuentaRegresiva from './components/CuentaRegresiva';
import Sorteo from './components/Sorteo'



function App() {
  return (
    <BrowserRouter>
   
      <Nav />
      <Route exact path="/">
      <br/>
      <Formulario />
      </Route>
      <Route exact path="/admin1410">
      <br/>
      <Sorteo />
      </Route>
      <Route exact path="/home">
      <CuentaRegresiva />
      <Carrousel />
      <Presentación />
      <Premios />
      <Info />
      <EntradasSorteo />
      </Route>
      <br/>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
