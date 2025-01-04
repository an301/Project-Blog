// React Router and Hooks
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// progress bar from Bootstrap
import ProgressBar from 'react-bootstrap/ProgressBar';

import './App.css';

// importing pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import RandomImage from './pages/RandomImage';

function App() {
  // map routes to progress values for the progress bar up top
  const pathProgressMap = {
    '/': 0,
    '/about-me': 25,
    '/project1': 50,
    '/project2': 75,
    '/random-image': 100,
  };

  // crrent route info
  const location = useLocation();
  // progress state
  const [progress, setProgress] = useState(0);

  // update progress on route change
  useEffect(() => {
    setProgress(pathProgressMap[location.pathname] || 0);
  }, [location]);

  return (
    <div>
      {/* Nav Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container flex-column">
          {/* Nav buttons and the toggle*/}
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
            {/* navbar links and where they lead to */}
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav">
                {/* home */}
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/">Home</Link>
                </li>
                {/* about me */}
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/about-me">About Me</Link>
                </li>
                {/* project 1 */}
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/project1">Book Recommender</Link>
                </li>
                {/* project 2 */}
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/project2">Voice-Based Code Editor</Link>
                </li>
                {/* image api */}
                <li className="nav-item">
                  <Link className="btn btn-outline-primary nav-link mx-2 rounded" to="/random-image">Random Image</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* progress bar style*/}
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

      {/* shift for fixed navbar */}
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

// Export 
export default AppWrapper;
