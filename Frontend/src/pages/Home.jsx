// react and Bootstrap imports
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// images for each card
import aboutMeImage from "/src/assets/buttons/aboutme.png";
import project1Image from "/src/assets/buttons/project1.png";
import project2Image from "/src/assets/buttons/project2.png";
import randomImage from "/src/assets/buttons/randomimage.png";

// Home section
function Home() {
  // data to be displayed on each card
  const cardData = [
    {
      title: "About Me",
      img: aboutMeImage,
      text: "Learn more about me and my interests.",
      link: "/about-me",
    },
    {
      title: "Book Recommender",
      img: project1Image,
      text: "Explore my book recommendation system.",
      link: "/project1",
    },
    {
      title: "Voice-Based Code Editor",
      img: project2Image,
      text: "Check out my voice-based coding tool.",
      link: "/project2",
    },
    {
      title: "Random Image API",
      img: randomImage,
      text: "Generate a random image using APIs.",
      link: "/random-image",
    },
  ];

  return (
    <div className="home-container">
      {/* Static text at the top that should glow */}
      <div className="static-marquee text-center">
        <p>
          print(<span id="printText1">"Welcome To My Portfolio"</span>) · println(
          <span id="printText2">"Welcome To My Portfolio"</span>) · console.log(
          <span id="printText3">"Welcome To My Portfolio"</span>) · &lt;h1&gt;
          <span id="printText4">Welcome To My Portfolio</span>&lt;/h1&gt;
        </p>
      </div>

      {/* Intro about the site */}
      <div className="text-center">
        <h1 className="header">Hi, I'm Anish</h1>
        <p className="intro-text">
          Learn about me, explore my projects, and see what I've built.
        </p>
      </div>

      {/* cards container */}
      <div className="container d-flex justify-content-center flex-wrap mt-5">
        {cardData.map((card, index) => (
          <Card
            // each card has these
            key={index}
            className="custom-card mx-3 mb-4"
            style={{ width: "16rem" }}
          >
            {/* card image */}
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              {/* link to route */}
              <Link to={card.link}>
                <Button variant="primary">Explore</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

// Export 
export default Home;
