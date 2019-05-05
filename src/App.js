import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
    
  var cardsArray = [
      {
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
      var currentIndex = array.length, temporaryValue, randomIndex;
    
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

  return (
    <div className="App">
    {
      cardsArray.map(function(card, index) {
          return <Card imageUrl={card.imageUrl} id={card.id} clickCount={card.clickCount} />
                })
    }   
    </div>
  );
}

export default App;
