import React, { useState } from "react";
import axios from "axios";

function RandomImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomImage = async () => {
    setError(null);
    setImage(null);

    try {
      // Make a request to the backend
      const response = await axios.get("http://localhost:5000/api/random-image");

      // Set the image URL
      setImage(response.data.imageUrl);
    } catch (err) {
      setError("Try again.");
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Random Image Generator</h1>
      <p>Click the button below to generate a random image.</p>
      <button className="btn btn-primary mt-3" onClick={fetchRandomImage}>
        Get Random Image
      </button>
      {error && <p className="mt-3 text-danger">{error}</p>}
      {image && (
        <div className="mt-3">
          <img
            src={image}
            alt="Random"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </div>
      )}
    </div>
  );
}

export default RandomImage;
