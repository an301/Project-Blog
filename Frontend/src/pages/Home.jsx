import React from 'react';

function Home() {
  return (
    <div className="container text-center mt-5" style={{ color: '#9290C3' }}>
      <h1 className="mb-4" style={{ color: '#FFFFFF' }}>Welcome to My Portfolio</h1>
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
