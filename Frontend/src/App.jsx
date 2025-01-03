import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import RandomImage from './pages/RandomImage';

function App() {
  const pathProgressMap = {
    '/': 0,
    '/about-me': 25,
    '/project1': 50,
    '/project2': 75,
    '/random-image': 100,
  };

  const location = useLocation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(pathProgressMap[location.pathname] || 0);
  }, [location]);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container flex-column">
          {/* Navbar Buttons */}
          <div className="d-flex justify-content-center">
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
          {/* Progress Bar */}
          <div className="w-100" style={{ marginTop: '10px' }}>
            <ProgressBar
              now={progress}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '0',
              }}
            />
          </div>
        </div>
      </nav>

      {/* Add spacing for the fixed navbar */}
      <div style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/project2" element={<Project2 />} />
          <Route path="/random-image" element={<RandomImage />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
