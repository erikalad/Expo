import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carrousel />
  
      <Premios />
      <Info />
      <Formulario/>
      <Footer />
      
    </div>
  );
}

export default App;
