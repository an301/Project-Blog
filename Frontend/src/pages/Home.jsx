import React from 'react';


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
