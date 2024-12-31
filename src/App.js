import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Collab from './components/Collab';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />
      <Intro />
      <Projects />
      <Collab />
      <Footer />
    </div>
  );
}

export default App;
