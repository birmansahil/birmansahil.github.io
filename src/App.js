import Intro from './components/Intro';
import Projects from './components/Projects';
import Collab from './components/collab';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Intro />
      <Projects />
      <Collab />
    </div>
  );
}

export default App;
