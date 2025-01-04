// Express server framework
const express = require("express");
// Axios for requests
const axios = require("axios");
// CORS 
const cors = require("cors");

const app = express();
const PORT = 5000;

const API_KEY = "48004677-d19b9f360b802287b786bdd5e"; 
//API KEY should be hidden but everytime I try to store in .env and use gitignore,
//the site crashes. 

// List of random image queries
const QUERIES = [
  "nature", "animals", "travel", "space", "technology", "ocean", "mountains",
  "forests", "wildlife", "architecture", "cities", "food", "sports", 
  "sunset", "flowers", "landscapes", "beach", "rivers", "stars", "galaxies",
  "abstract", "minimalist", "art", "paintings", "cars", "planes", "trains",
  "bikes", "hiking", "adventure", "camping", "deserts", "waterfalls",
  "islands", "lakes", "snow", "winter", "autumn", "spring", "summer",
  "countryside", "clouds", "rainbows", "balloons", "fireworks", "festivals",
  "holidays", "birds", "insects", "fish", "reptiles", "amphibians",
  "domestic animals", "wild animals", "aquatic life", "science",
  "robotics", "AI", "biology", "chemistry", "physics", "education",
  "fantasy", "dragons", "unicorns", "knights", "castles", "villages",
  "bridges", "roads", "gardens", "parks", "playgrounds", "underwater",
  "caves", "cliffs", "volcanoes", "earthquakes", "tsunamis"
];

// start cors
app.use(cors());

// route for random image
app.get("/api/random-image", async (req, res) => {
  try {
    // get random query using this function
    const randomQuery = QUERIES[Math.floor(Math.random() * QUERIES.length)];

    // Call Pixabay API
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: API_KEY,
        q: randomQuery,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        per_page: 20,
      },
    });

    // check if images are there
    if (response.data.hits.length > 0) {
      // Pick random image
      const randomImage = response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
      res.json({ imageUrl: randomImage.largeImageURL });
    // if theres no image found  
    } else {
      res.status(404).json({ message: "No images." });
    }
  } catch (error) {
    // write the error down
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
