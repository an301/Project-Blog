import React from 'react';
import { Link } from 'react-router-dom';

// Import button images
import aboutMeImage from '/src/assets/buttons/aboutme.png';
import project1Image from '/src/assets/buttons/project1.png';
import project2Image from '/src/assets/buttons/project2.png';
import randomImage from '/src/assets/buttons/randomimage.png';

function Home() {
  return (
    <div className="home-container text-center">
      {/* Scrolling Marquee Text */}
      <div className="marquee">
        <p>
          print(<span id="printText1">"Welcome To My Portfolio"</span>) · println(<span id="printText2">"Welcome To My Portfolio"</span>) · console.log(<span id="printText3">"Welcome To My Portfolio"</span>) · &lt;h1&gt;<span id="printText4">Welcome To My Portfolio</span>&lt;/h1&gt;
        </p>
      </div>

      {/* Main Content */}
      <h1 className="header">Hi, I'm Anish</h1>
      <p className="mt-3">
        Explore my work, learn about me, and see what I’ve been building.
      </p>

      {/* Buttons Section */}
      <div className="d-flex justify-content-center flex-wrap mt-5">
        <Link to="/about-me" className="button-container mx-2">
          <img src={aboutMeImage} alt="About Me" className="button-image" />
          <p className="button-text">About Me</p>
        </Link>
        <Link to="/project1" className="button-container mx-2">
          <img src={project1Image} alt="Project 1" className="button-image" />
          <p className="button-text">Book Recommender</p>
        </Link>
        <Link to="/project2" className="button-container mx-2">
          <img src={project2Image} alt="Project 2" className="button-image" />
          <p className="button-text">Voice-Based Code Editor</p>
        </Link>
        <Link to="/random-image" className="button-container mx-2">
          <img src={randomImage} alt="Random Image" className="button-image" />
          <p className="button-text">Random Image API</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
