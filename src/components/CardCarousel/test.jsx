import React, { useState } from "react";
import ProjectsCard from "../ProjectsCard";
import "./cardcarousel.css";
import banner from "../../images/banner.png";
import starwars from "../../images/starwars.png";
import sauce from "../../images/hot.png";

const Carousel = () => {
  // define a functional component called Carousel that takes no arguments
  const [currentCard, setCurrentCard] = useState(0);
  const [transitionState, setTransitionState] = useState("");

  const cardData = [
    // define an array of card data
    {
      title: "Comic book managment API",
      image: banner,
      description: "",
      href: "https://github.com/roger2727/T2A2---API-Webserver-Project",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li>Created a functional and scalable API</li>
        </ul>
      ),
    },

    {
      title: "Star Wars Terminal app", // the title of the second card
      image: starwars,
      description: "",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li>Experience with implementing decision-making logic</li>
        </ul>
      ),
      href: "https://github.com/roger2727/MitchellRoger_T1A3", // the image for the second card
    },
    {
      title: "King Of Wings App", // the title of the third card
      image: sauce,
      description: "",
      href: "https://github.com/roger2727/T2A2---API-Webserver-Project",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li></li>
        </ul>
      ),
    },
  ];
  const moveToNextCard = () => {
    setTransitionState("slide-out"); // trigger the transition
    setTimeout(() => {
      // wait for the transition to complete
      if (currentCard === cardData.length - 1) {
        setCurrentCard(0);
      } else {
        setCurrentCard(currentCard + 1);
      }
      setTransitionState("slide-in"); // trigger the transition
    }, 500); // adjust the timeout duration to match the transition duration
  };

  const moveToPrevCard = () => {
    setTransitionState("slide-out"); // trigger the transition
    setTimeout(() => {
      // wait for the transition to complete
      if (currentCard === 0) {
        setCurrentCard(cardData.length - 1);
      } else {
        setCurrentCard(currentCard - 1);
      }
      setTransitionState("slide-in"); // trigger the transition
    }, 500); // adjust the timeout duration to match the transition duration
  };

  return (
    <div className="project-group">
      <h2 className="project-num">
        Project {currentCard + 1}/{cardData.length}
      </h2>

      <div className="cardbox">
        <button className="carousel-button" onClick={moveToPrevCard}>
          Prev
        </button>
        <div className={`cardbox ${transitionState}`}>
          <ProjectsCard // a Card component
            title={cardData[currentCard].title} // with the title prop set to the title of the current card
            image={cardData[currentCard].image}
            description={cardData[currentCard].description}
            href={cardData[currentCard].href}
            skillsTitle={cardData[currentCard].skillsTitle}
            skillsList={cardData[currentCard].skillsList}
          />
        </div>
        <button className="carousel-button" onClick={moveToNextCard}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
