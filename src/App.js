import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import KittenFlex from './components/kitten-flex';
import kittens from "../kittens.json";

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    newGame: true,
    kittens: kittens.map(kitten => kitten.guessed = false)
  };

  // function for incremement score
  incrementScore = () => {
    // increment score by 1
    this.setState({ score: this.state.score + 1 });
    this.setState({ newGame: false })
    // increment high score if it's equal to current score
    if (this.state.score === this.state.highScore) {
      this.setState({ highScore: this.state.highScore + 1 });
    }
  };

  resetGame = () => {
    this.setState({ score: 0 });
    this.setState({ newGame: true });
  };

  continueGame = () => {
    this.setState({ newGame: false });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <KittenFlex
          score={this.state.score}
          highScore={this.state.highScore}
          incrementScore={this.incrementScore}
          resetGame={this.resetGame}
          newGame={this.state.newGame}
          continueGame={this.state.continueGame}
        />
      </div>
    );
  }
}

export default App;