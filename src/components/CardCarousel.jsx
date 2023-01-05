import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import "./CardCarousel.css";
import banner from "../images/banner.png";
import starwars from "../images/starwars.png";
import sauce from "../images/hot.png";

const Carousel = () => {
  // define a functional component called Carousel that takes no arguments
  const [currentCard, setCurrentCard] = useState(0);
  const [transitionState, setTransitionState] = useState("");

  const cardData = [
    // define an array of card data
    {
      title: "Comic book managment API",
      image: banner,
      description:
        "The API is designed to help users manage their comic book collection by providing a way to store and organize their comics. It allows users to add reviews and ratings to their comics to help them keep track of which ones they have enjoyed the most. The API also has a feature that allows users to randomly select a comic to read, which can save time and streamline the process of choosing a comic to read. In addition, the app helps users track the total number of comics they own and the overall value of their collection, which can be useful for collectors who want to keep track of their investments.",
      href: "https://github.com/roger2727/T2A2---API-Webserver-Project",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li>Built a API using Flask, SQLAlchemy and Python</li>
          <li>Worked with database and implemented JWT authentication</li>
          <li>Used Marshmallow to serialize/deserialize data</li>
          <li>
            Required strong understanding of Python and web development concepts
          </li>
          <li>Created a functional and scalable API</li>
        </ul>
      ),
    },

    {
      title: "Star Wars Terminal app", // the title of the second card
      image: starwars,
      description:
        "This Python terminal app is a Star Wars adventure game that allows you to immerse yourself in the Star Wars universe. The app includes a quiz that will determine if you are a Jedi or Sith based on your responses. Once you have completed the quiz, you will be directed to a story quest where you can choose your own adventure and explore the Star Wars world. The app provides a unique and interactive way to engage with the Star Wars franchise, and the choose your own adventure aspect adds an element of unpredictability and replay value to the game.",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li>Proficiency in Python programming language</li>
          <li> terminal app development</li>
          <li>
            Experience with implementing user input and output and error
            handling
          </li>
          <li>
            Understanding of software design principles and best practices
          </li>
          <li>Experience with implementing decision-making logic</li>
        </ul>
      ),
      href: "https://github.com/roger2727/MitchellRoger_T1A3", // the image for the second card
    },
    {
      title: "King Of Wings App", // the title of the third card
      image: sauce,
      description:
        "King of Wings Challenge is a thrilling and spicy new game built with React that will test your tolerance for heat! In this game, players will collect various types of hot sauce and assign them a number from 1 to 10, with 10 being the spiciest. Once the game begins, players will be presented with a randomly selected hot sauce and a random challenge, such as taking a drink or adding more sauce to a chicken wing. The goal is to survive 10 rounds and emerge as the ultimate hot sauce champion! With the ability to play with as many people as you'd like, King of Wings Challenge is the perfect party game for spice lovers everywhere.",
      href: "https://github.com/roger2727/hot-wings-react",
      skillsTitle: "Skills gained",
      skillsList: (
        <ul>
          <li>
            In-depth understanding of React components and the JSX syntax for
            embedding HTML-like elements in my code
          </li>
          <li>
            Familiarity with the React component lifecycle and how to mount,
            update, and unmount components
          </li>
          <li>
            Experiance in managing component state and props, and how to pass
            data between components
          </li>
          <li>
            Familiarity with React hooks and how to use them to add state and
            other features to functional components
          </li>
          <li>
            Basic understanding of webpack and npm, and how to use them to
            bundle assets and manage dependencies
          </li>
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
