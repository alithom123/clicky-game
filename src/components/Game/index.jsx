import React from "react";
import Jumbotron from "../Jumbotron/index.jsx"
import Card from "../Card/index.jsx";
import shuffle from "../../utilities/shuffle.js";



class Game extends React.Component {

  /* Constructor Start */
  constructor(props) {
    super(props);
    const githubPageUrl = "https://alithom123.github.io/clicky-game";

    const cardsArray = [{
      id: 1,
      imageUrl: githubPageUrl + "/1.jpg",
      clickCount: 0
    },
    {
      id: 2,
      imageUrl: githubPageUrl + "/2.jpg",
      clickCount: 0
    },
    {
      id: 3,
      imageUrl: githubPageUrl + "/3.jpg",
      clickCount: 0
    },
    {
      id: 4,
      imageUrl: githubPageUrl + "/4.jpg",
      clickCount: 0
    },
    {
      id: 5,
      imageUrl: githubPageUrl + "/5.jpg",
      clickCount: 0
    },
    {
      id: 6,
      imageUrl: githubPageUrl + "/6.jpg",
      clickCount: 0
    },
    {
      id: 7,
      imageUrl: githubPageUrl + "/7.jpg",
      clickCount: 0
    },
    {
      id: 8,
      imageUrl: githubPageUrl + "/8.jpg",
      clickCount: 0
    },
    {
      id: 9,
      imageUrl: githubPageUrl + "/9.jpg",
      clickCount: 0
    },
    ];

    console.log(cardsArray);
    // Make a copy of the cardsArray that you shuffle.
    // var shuffledCardsArray = shuffle(cardsArray.slice());
    // console.log("shuffledCardsArray: ", shuffledCardsArray);

    this.state = {
      cardsArray: cardsArray,
      score: 0,
      highScore: 0,
      gamesPlayed: 0,
    };

    console.log(this.state.cardsArray);
  };
  /* Constructor End */

  componentDidMount() { }

  componentWillUnmount() { }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  handleCardClick(card) {
    // this.setState({ x: "X" });
    // console.log("handleCardClick running");
    // alert("handleCardClick running" + JSON.stringify(card));
    // console.log(cardId);

    const cardsArray = this.state.cardsArray.slice();
    cardsArray.forEach((eachCard) => {
      if (eachCard.id === card.id) { // Found Card.

        // If they have already clicked this card, they lose.
        if (eachCard.clickCount === 1) {
          // They lose. 
          if (this.state.score > this.state.highScore) { // Update highScore if necessary.
            this.state.highScore = this.state.score;
          }
          this.state.gamesPlayed += 1;
          this.setState({
            cardsArray: cardsArray,
            gamesPlayed: this.state.gamesPlayed,
            highScore: this.state.highScore,
            score: this.state.score
          });

          alert("You lost. Please play again!");

        } else { // Still playing.

          // Check for win.
          eachCard.clickCount += 1;
          this.state.score += 1;

          this.setState({
            cardsArray: cardsArray,
            score: this.state.score
          });
        }

        alert(JSON.stringify(this.state.cardsArray))
      }
    })
  };

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  hcc = event => {
    const { id, clickcount } = event.target;
    console.log(event);
    console.log(`id = ${id}`);
    console.log(`clickCount = ${clickcount}`);
    // alert("Card clicked");
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { id, clickcount } = event.target;

    // console.log(`id = ${id}`);
    // console.log(`clickCount = ${clickcount}`);

    // Set the state for the appropriate input field
    // this.setState({
    //   [name]: value
    // });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  // renderCard(card) {
  //   return <Card imageUrl={card.imageUrl} id={card.id} onClick={() => this.handleCardClick(card)}></Card>
  // }

  render() {
    return (
      <div className="Game" >
        <Jumbotron highScore={this.state.highScore} score={this.state.score} gamesPlayed={this.state.gamesPlayed} />
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[0].imageUrl} id={this.state.cardsArray[0].id} onClick={() => this.handleCardClick(this.state.cardsArray[0])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[1].imageUrl} id={this.state.cardsArray[1].id} onClick={() => this.handleCardClick(this.state.cardsArray[1])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[2].imageUrl} id={this.state.cardsArray[2].id} onClick={() => this.handleCardClick(this.state.cardsArray[2])}></Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[3].imageUrl} id={this.state.cardsArray[3].id} onClick={() => this.handleCardClick(this.state.cardsArray[3])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[4].imageUrl} id={this.state.cardsArray[4].id} onClick={() => this.handleCardClick(this.state.cardsArray[4])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[5].imageUrl} id={this.state.cardsArray[5].id} onClick={() => this.handleCardClick(this.state.cardsArray[5])}></Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[6].imageUrl} id={this.state.cardsArray[6].id} onClick={() => this.handleCardClick(this.state.cardsArray[6])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[7].imageUrl} id={this.state.cardsArray[7].id} onClick={() => this.handleCardClick(this.state.cardsArray[7])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.cardsArray[8].imageUrl} id={this.state.cardsArray[8].id} onClick={() => this.handleCardClick(this.state.cardsArray[8])}></Card>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Game;

{/* <div class="row">
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
  <div class="col-sm-4">.col-sm-4</div>
</div> */}

            // shuffle(this.state.cardsArray.slice()).map((card, index) => {
            //   return this.renderCard(card);
            // })