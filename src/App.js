import logo from './logo.svg';
import './App.css';
import Footer from "./Components/Footer/Footer.js"; 
import Pocket from "./Components/PocketSection/Pocket.js";
import Feature  from './Components/Feature/Feature.js';
import Hero from "./Components/Hero/Hero.js";

function App() {

  return (
    <div className="App">
    <Hero />
    <Feature />
    <Pocket />
    <Footer />
     </div>
  )
}

export default App;
