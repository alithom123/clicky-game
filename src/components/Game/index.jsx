import React from "react";
import Jumbotron from "../Jumbotron/index.jsx"
import Card from "../Card/index.jsx";
import shuffle from "../../utilities/shuffle.js";



class Game extends React.Component {

  /* Constructor Start */
  constructor(props) {
    super(props);
    const githubPageUrl = "https://alithom123.github.io/clicky-game";

    var cardsArray = [{
      id: 1,
      imageUrl: githubPageUrl + "/1bootstrap.png",
      clickCount: 0
    },
    {
      id: 2,
      imageUrl: githubPageUrl + "/2html.png",
      clickCount: 0
    },
    {
      id: 3,
      imageUrl: githubPageUrl + "/3javascript.png",
      clickCount: 0
    },
    {
      id: 4,
      imageUrl: githubPageUrl + "/4mongo.png",
      clickCount: 0
    },
    {
      id: 5,
      imageUrl: githubPageUrl + "/5nodejs.png",
      clickCount: 0
    },
    {
      id: 6,
      imageUrl: githubPageUrl + "/6react.png",
      clickCount: 0
    },
    {
      id: 7,
      imageUrl: githubPageUrl + "/7css.png",
      clickCount: 0
    },
    {
      id: 8,
      imageUrl: githubPageUrl + "/8mysql.png",
      clickCount: 0
    },
    {
      id: 9,
      imageUrl: githubPageUrl + "/9github.png",
      clickCount: 0
    },
    ];

    const shuffledCardsArray = shuffle(cardsArray.slice());
    // shuffledCardsArray = shuffle(shuffledCardsArray);

    // console.log(cardsArray);
    // console.log(shuffledCardsArray);
    // Make a copy of the cardsArray that you shuffle.
    // var shuffledCardsArray = shuffle(cardsArray.slice());
    // console.log("shuffledCardsArray: ", shuffledCardsArray);


    this.state = {
      cardsArray: cardsArray,
      shuffledCardsArray: shuffledCardsArray,
      score: 0,
      highScore: 0,
      gamesPlayed: 0,
      totalClickCount: 0,
    };

    console.log("State = ");
    console.log(this.state);
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

    // If it's their first click then reset score to 0.
    // if (this.state.totalClickCount === 0) {
    //   this.state.score = 0;
    //   this.setState({
    //     score: 0,
    //   })
    // }

    const cardsArray = this.state.cardsArray.slice();
    // const cardsArray = this.state.shuffledCardsArray.slice();
    cardsArray.forEach((eachCard) => {
      if (eachCard.id === card.id) { // Found Card.

        this.state.totalClickCount += 1;
        // If they have already clicked this card, they lose.
        if (eachCard.clickCount === 1) {

          // They lose. 
          if (this.state.score > this.state.highScore) { // Update highScore if necessary.
            this.state.highScore = this.state.score;
          }
          this.state.gamesPlayed += 1;

          // Shuffle cards to play again.
          this.state.shuffledCardsArray = shuffle(this.state.cardsArray.slice());

          // Reset clickCount on each card to 0.
          cardsArray.map((c) => {
            c.clickCount = 0;
            return c;
          });

          alert("You lost. Please play again!");
          this.state.score = 0;

          // Set state to render new game.
          this.setState({
            cardsArray: cardsArray,
            shuffledCardsArray: this.state.shuffledCardsArray,
            gamesPlayed: this.state.gamesPlayed,
            highScore: this.state.highScore,
            score: this.state.score,
            totalClickCount: this.state.totalClickCount
          });

        } else { // Still playing.

          eachCard.clickCount += 1;
          this.state.score += 1;

          // Check for win.
          if (this.state.score === 9) {
            alert("You won! Please play again!");
            this.state.score = 0;

            // Reset clickCount on each card to 0.
            // cardsArray.forEach(function (c, index) {
            //   this[index].clickCount = 0;
            // }, cardsArray);
            cardsArray.map((c) => {
              c.clickCount = 0;
              return c;
            });
          }

          this.state.shuffledCardsArray = shuffle(cardsArray.slice());

          this.setState({
            cardsArray: cardsArray,
            shuffledCardsArray: this.state.shuffledCardsArray,
            score: this.state.score,
            totalClickCount: this.state.totalClickCount
          });
        }

        // alert(JSON.stringify(this.state.cardsArray))
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
              <Card imageUrl={this.state.shuffledCardsArray[0].imageUrl} id={this.state.shuffledCardsArray[0].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[0])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[1].imageUrl} id={this.state.shuffledCardsArray[1].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[1])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[2].imageUrl} id={this.state.shuffledCardsArray[2].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[2])}></Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[3].imageUrl} id={this.state.shuffledCardsArray[3].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[3])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[4].imageUrl} id={this.state.shuffledCardsArray[4].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[4])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[5].imageUrl} id={this.state.shuffledCardsArray[5].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[5])}></Card>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[6].imageUrl} id={this.state.shuffledCardsArray[6].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[6])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[7].imageUrl} id={this.state.shuffledCardsArray[7].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[7])}></Card>
            </div>
            <div className="col-sm-4">
              <Card imageUrl={this.state.shuffledCardsArray[8].imageUrl} id={this.state.shuffledCardsArray[8].id} onClick={() => this.handleCardClick(this.state.shuffledCardsArray[8])}></Card>
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