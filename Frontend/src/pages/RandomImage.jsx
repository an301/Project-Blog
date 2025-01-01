import React, { useState } from 'react';

function RandomImage() {
  const [image, setImage] = useState('');

  const fetchRandomImage = async () => {
    const response = await fetch('https://source.unsplash.com/random');
    setImage(response.url);
  };

  return (
    <div className="container mt-5">
      <h1>Random Image Generator</h1>
      <button className="btn btn-primary" onClick={fetchRandomImage}>
        Fetch Random Image
      </button>
      {image && (
        <div className="mt-3">
          <img src={image} alt="Random" className="img-fluid" />
        </div>
      )}
    </div>
  );
}

export default RandomImage;
