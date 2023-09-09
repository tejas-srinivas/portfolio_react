import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Qualification />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

