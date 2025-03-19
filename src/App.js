import logo from './car.png';
import './App.css';
import { Link } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lets go somewhere
        </p>
        <Link to="/landing">
            <button>Explore</button>
        </Link>
      </header>
    </div>
  );
}

export default App;
