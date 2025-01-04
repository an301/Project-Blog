const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

const API_KEY = "48004677-d19b9f360b802287b786bdd5e";
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

app.use(cors());

app.get("/api/random-image", async (req, res) => {
  try {
    // Select a random query
    const randomQuery = QUERIES[Math.floor(Math.random() * QUERIES.length)];

    // Make the API call
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

    // Check if the response contains images
    if (response.data.hits.length > 0) {
      const randomImage =
        response.data.hits[Math.floor(Math.random() * response.data.hits.length)];
      res.json({ imageUrl: randomImage.largeImageURL });
    } else {
      res.status(404).json({ message: "No images found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
