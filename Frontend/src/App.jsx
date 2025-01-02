import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import RandomImage from './pages/RandomImage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container justify-content-center">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/about-me">About Me</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/project1">Book Recommender</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/project2">Voice-Based Code Editor</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/random-image">Random Image</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Add spacing for the fixed navbar */}
        <div style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/project1" element={<Project1 />} />
            <Route path="/project2" element={<Project2 />} />
            <Route path="/random-image" element={<RandomImage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
