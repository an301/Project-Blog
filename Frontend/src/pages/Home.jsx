import React from 'react';
import './Home.css'; // Import custom CSS for the marquee effect

function Home() {
  return (
    <div className="home-container text-center">
      {/* Scrolling Marquee Text */}
      <div className="marquee">
        <p>
          print('welcome to my portfolio') · println('welcome to my portfolio') · console.log('welcome to my portfolio') · &lt;h1&gt;welcome to my portfolio&lt;/h1&gt;
        </p>
      </div>

      {/* Main Content */}
      <h1 className="header">Welcome to My Portfolio</h1>
      <p className="mt-3">
        Explore my work, learn about me, and see what I’ve been building.
      </p>
      <p className="mt-3">
        Use the navigation bar above to learn more about me and check out my projects.
      </p>
      <p className="mt-3">
        This portfolio includes projects like a <strong>Book Recommender</strong> and a <strong>Voice-Based Code Editor</strong>.
      </p>
    </div>
  );
}

export default Home;
