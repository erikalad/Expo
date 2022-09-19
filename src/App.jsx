import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Carrousel from './components/Carrousel';
import Premios from './components/Premios';
import Info from './components/Información';

function App() {
  return (
    <div className="App">
      <Nav />
      <Carrousel />
  
      <Premios />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
