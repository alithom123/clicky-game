import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1>Clicky Game</h1>
            <p>Play the clicky memory game! Click the same image twice and you lose! Don't ... and you win!</p>
            <p>High Score: {props.highScore}</p>
            <p>Current Score: {props.score}</p>
            <p>Games Played: {props.gamesPlayed}</p>
        </div>
    );
}

export default Jumbotron;