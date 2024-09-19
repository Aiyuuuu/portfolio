import React, { useState } from "react";
// import "./Projects.css"; // Ensure this CSS is linked

const cardsData = [
  {
    title: "AI Art Gallery",
    description: "made with react and uses an API to fetch images",
    image: "AI_art.jpg",
  },
  {
    title: "Spotify clone frontend",
    description: "using HTML, CSS and JavaScript",
    image: "Spotify.jpg",
  },
  {
    title: "ABA Estate",
    description: "a complete real estate application using HTML, CSS, JS and node JS (team project)",
    image: "ABA_estate.jfif",
  },
  // Add more cards if needed
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const goToPreviousCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  return (
    <div className="projects">
        <h1>PROJECTS</h1>
      <div className="slider">
        <button className="prev" onClick={goToPreviousCard}>
          &lt;
        </button>
        <div
          className="card-container"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
             // Dynamic width for all cards
          }}
        >
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <button className="next" onClick={goToNextCard}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Projects;
