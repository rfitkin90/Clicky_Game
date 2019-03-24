import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import KittenFlex from './components/kitten-flex';

class App extends Component {
  state = {
    score: 0,
    highScore: 0
  };

  // function for incremement score
  incrementScore = () => {
    // increment score by 1
    this.setState({ score: this.state.score + 1 });
    // increment high score if it's equal to current score
    if (this.state.score === this.state.highScore) {
      this.setState({ highScore: this.state.highScore + 1 });
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <KittenFlex
          score={this.state.score}
          highScore={this.state.highScore}
          incrementScore={this.incrementScore}
        />
      </div>
    );
  }
}

export default App;