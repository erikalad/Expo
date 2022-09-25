import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Formulario from './components/Formulario';
import Presentación from './components/Presentación';
import EntradasSorteo from './components/EntradasSorteo';
import Sorteo from './components/Sorteo';
import CuentaRegresiva from './components/CuentaRegresiva';



function App() {
  return (
    <div className="App" >
      <Nav />
      <CuentaRegresiva />
      <Carrousel />
      <Presentación />
      <Premios />
      <Info />
      <Formulario/>
      <EntradasSorteo />
      <br/>
      <hr/>
      <Sorteo />
      <Footer />

     
    </div>
  );
}

export default App;
