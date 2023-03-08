import './App.css';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Intro from './components/Intro';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Experience/>
      <Skills/>
      <Hobbies/>
    </div>
  );
}

export default App;
