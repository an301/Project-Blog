import React, { useState } from "react";
import axios from "axios";

function RandomImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomImage = async () => {
    setError(null);
    setImage(null);

    try {
      // Make request to backend
      const response = await axios.get("http://localhost:5000/api/random-image");

      // Set the image URL
      setImage(response.data.imageUrl);
    } 
    catch (err) {
      setError("Try again.");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Random Image Generator</h1>
      <p>Generate a random image using Pixabay's API.</p>
      <button className="btn btn-primary mt-3" onClick={fetchRandomImage}>
        Generate Random Image
      </button>
      {error && <p className="mt-3 text-danger">{error}</p>}
      {image && (
        <div className="mt-3">
          <img
            src={image}
            alt="Random"
            className="img-fluid"
            style={{ maxWidth: "65%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default RandomImage;
