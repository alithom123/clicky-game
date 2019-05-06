import React from 'react';
import './App.css';
import Game from "./components/Game/index.jsx";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar'

function App() {

  var cardsArray = [{
    id: 1,
    imageUrl: "/1.jpg",
    clickCount: 0
  },
  {
    id: 2,
    imageUrl: "/2.jpg",
    clickCount: 0
  },
  {
    id: 3,
    imageUrl: "/3.jpg",
    clickCount: 0
  },
  {
    id: 4,
    imageUrl: "/4.jpg",
    clickCount: 0
  },
  {
    id: 5,
    imageUrl: "/5.jpg",
    clickCount: 0
  },
  {
    id: 6,
    imageUrl: "/6.jpg",
    clickCount: 0
  },
  {
    id: 7,
    imageUrl: "/7.jpg",
    clickCount: 0
  },
  {
    id: 8,
    imageUrl: "/8.jpg",
    clickCount: 0
  },
  {
    id: 9,
    imageUrl: "/9.jpg",
    clickCount: 0
  },
  ];

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  var shuffledCardsArray = shuffle(cardsArray);
  console.log("shuffledCardsArray: ", shuffledCardsArray);

  var handleCardClick = function () {
    console.log("handleCardClick running");
  }


  return (
    <div className="App" >
      <Navbar />
      <Jumbotron />
      <div className="container">
        <Game />
      </div>
    </div>
  )

}

export default App;