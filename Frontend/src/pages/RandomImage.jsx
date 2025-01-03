import React, { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;;
const QUERIES = [
  "nature", "animals", "travel", "space", "technology", "ocean", "mountains", 
  "forests", "wildlife", "architecture", "cities", "food", "sports", 
  "sunset", "flowers", "landscapes", "beach", "rivers", "stars", "galaxies",
  "abstract", "minimalist", "art", "paintings", "cars", "planes", "trains", 
  "bikes", "hiking", "adventure", "camping", "deserts", "waterfalls", 
  "islands", "lakes", "snow", "winter", "autumn", "spring", "summer", 
  "countryside", "clouds", "rainbows", "balloons", "fireworks", "festivals", 
  "holidays", "animals", "birds", "insects", "fish", "reptiles", "amphibians", 
  "domestic animals", "farm animals", "wild animals", "forests", "savannah", 
  "jungle", "desert animals", "polar animals", "aquatic life", "science", 
  "robotics", "AI", "biology", "chemistry", "physics", "math", "education", 
  "history", "literature", "mythology", "fantasy", "dragons", "unicorns", 
  "elves", "dwarves", "knights", "castles", "villages", "cities", "skyscrapers", 
  "bridges", "roads", "farms", "gardens", "orchards", "vineyards", "parks", 
  "playgrounds", "tropical forests", "mangroves", "wetlands", "arctic", 
  "antarctica", "coral reefs", "seascapes", "underwater", "caves", "cliffs", 
  "plateaus", "volcanoes", "earthquakes", "tsunamis"
]; // Predetermined queries for randomization


function RandomImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomImage = async () => {
    setError(null);
    setImage(null);

    try {
      // Select a random query
      const randomQuery = QUERIES[Math.random() * QUERIES.length | 0];

      // Make the API call
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: API_KEY,
          q: randomQuery,
          image_type: "photo",
          orientation: "horizontal",
          safesearch: true,
          per_page: 10, // Fetch up to 10 images for better chances
        },
      });

      // Check if the response contains images
      if (response.data.hits.length > 0) {
        const randomImage =
          response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
        setImage(randomImage.largeImageURL);
      } else {
        setError("Please try again.");
      }
    } catch (err) {
      setError("Please try again.");
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
