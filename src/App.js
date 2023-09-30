import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from './pages';
import { Skills } from './pages';
import { Favorites } from './pages';
import { Spots } from './pages';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <div className="Navbar">
          <Link to="/">Index</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/spots">Spots</Link>
        </div>

        <Routes>
          <Route path="/staticproject/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/spots" element={<Spots />} />
        </Routes>

        <div className="Footer">
          <h1> Contact Me </h1>
          <form>
            <label>
              Name: 
              <input type ="text" name="name" />
            </label>
            <label>
              Email 
              <input type ="text" name="email" />
            </label>
            <br></br>
            <label>
              Message: 
              <input className="Message" type ="text" name="message" />
            </label>
            <button> 
              <p>Submit</p>
            </button>
          </form>
          <p> Copyright 2023 Jialiang Cao © </p>
        </div>
      </div>
    </Router>
    
    </>
  );
}

export default App;
