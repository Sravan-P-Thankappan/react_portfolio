import './App.css'
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Services from './services/Services';

function App() {
  return (
    <div className="App">

       <Navbar/>
       <Intro/>
       <Services/>

    </div>
  );
}

export default App;
