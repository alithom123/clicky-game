import React from 'react';
import './App.css';
import Game from "./components/Game/index.jsx";
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App" >
      <Navbar />
      <Game />
      {/* <Jumbotron />
      <div className="container">
        <Game />
      </div> */}
    </div>
  )

}

export default App;