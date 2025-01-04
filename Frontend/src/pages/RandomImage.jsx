// react and state
import React, { useState } from "react";
// import axios for API calls
import axios from "axios";

function RandomImage() {
  // image state
  const [image, setImage] = useState(null);
  // error state
  const [error, setError] = useState(null);

  // get a random image part
  const fetchRandomImage = async () => {
    setError(null);
    setImage(null);

    try {
      // use the deployed backend url to get response object from it
      const response = await axios.get("https://project-blog-tdkj.onrender.com/api/random-image");
      //have the image URL in a state
      setImage(response.data.imageUrl);
    } 
    catch (err) {
      //this occurs only if the request fails
      setError("Try again.");
    }
  };

  return (
    // area that allows the user to click a button and get an image
    <div className="container text-center mt-5">
      <h1>Random Image Generator</h1>
      <p>Generate a random image using Pixabay's API.</p>
      {/* button trigger request */}
      <button className="btn btn-primary mt-3" onClick={fetchRandomImage}>
        Generate Random Image
      </button>
      {/* shown if there is an error */}
      {error && <p className="mt-3 text-danger">{error}</p>}
      {/* show image */}
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

// export
export default RandomImage;
