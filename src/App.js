import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";

function App() {
  var imageId=1;
  // var imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg";

  var imageUrl="/A.jpg";
  var cardsArray = [
      {
        id: 1,
        imageUrl: "/A.jpg",
        clickCount: 0
      },
      {
        id: 2,
        imageUrl: "/b.jpg",
        clickCount: 0
      },
      {
        id: 3,
        imageUrl: "/C.jpg",
        clickCount: 0
      },
      {
        id: 4,
        imageUrl: "/D.jpg",
        clickCount: 0
      },
      {
        id: 5,
        imageUrl: "/E.jpg",
        clickCount: 0
      },
      {
        id: 6,
        imageUrl: "/F.jpg",
        clickCount: 0
      },
      {
        id: 7,
        imageUrl: "/G.jpg",
        clickCount: 0
      },
      {
        id: 8,
        imageUrl: "/H.jpg",
        clickCount: 0
      },
      {
        id: 9,
        imageUrl: "/I.jpg",
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
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
      <Card imageUrl={imageUrl} imageId={imageId} />
    </div>
  );
}

export default App;
