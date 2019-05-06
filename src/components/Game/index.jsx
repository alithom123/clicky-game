import React from "react";
import Card from "../Card/index.jsx";

// You can convert a function component like Clock to a class in five steps:

// Create an ES6 class, with the same name, that extends React.Component.

// Add a single empty method to it called render().

// Move the body of the function into the render() method.

// Replace props with this.props in the render() body.

// Delete the remaining empty function declaration.

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }


class Game extends React.Component {

  /* Constructor Start */
  constructor(props) {
    super(props);

    /* Utility function to shuffle */
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

    var shuffledCardsArray = shuffle(cardsArray);
    console.log("shuffledCardsArray: ", shuffledCardsArray);

    this.state = {
      cardsArray: cardsArray
    };
  };
  /* Constructor End */

  componentDidMount() { }

  componentWillUnmount() { }

  // tick() {
  //   this.setState({
  //     date: new Date()
  //   });
  // }

  handleCardClick(cardId) {
    // this.setState({ x: "X" });
    console.log("handleCardClick running");
    console.log(cardId);
  };

  hcc = event => {
    const { id, clickcount } = event.target;
    console.log(event);
    console.log(`id = ${id}`);
    console.log(`clickCount = ${clickcount}`);
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { id, clickcount } = event.target;

    console.log(`id = ${id}`);
    console.log(`clickCount = ${clickcount}`);

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

  render() {
    return (
      <div className="App" > {
        this.state.cardsArray.map(function (card, index) {
          return <Card imageUrl={
            card.imageUrl
          }
            id={
              card.id
            }
            clickCount={
              card.clickCount
            }
            handleCardClick={
              this.hcc
            }
          />
        }, this)
      }
      </div>
    );
  }
}


export default Game;