import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Formulario from './components/Formulario';
import Presentación from './components/Presentación';
import EntradasSorteo from './components/EntradasSorteo';
import AndarProductions from './components/AndarProductions';
import Sorteo from './components/Sorteo';


function App() {
  return (
    <div className="App">
      <Nav />
      <AndarProductions />
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
