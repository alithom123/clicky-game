import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  var imageId=1;
  // var imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg";

  var imageUrl="/1.jpg";
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
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

{
      cardsArray.map(function(card, index) {
          return <Card imageUrl={card.imageUrl} id={card.id} clickCount={card.clickCount} />
                })
}
      {/* <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} /> */}
    </div>
  );
}

export default App;
