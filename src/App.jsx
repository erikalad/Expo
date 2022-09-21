import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Formulario from './components/Formulario';
import Sorteo from './components/Sorteo';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carrousel />
      <Premios />
      
      <Info />
      <Formulario/>
      <Sorteo />
      <Footer />

     
    </div>
  );
}

export default App;
