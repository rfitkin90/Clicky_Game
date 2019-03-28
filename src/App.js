import React, { Component } from 'react';
import './style.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import KittenFlex from './components/kitten-flex';
import kittens from "./kittens.json";


class App extends Component {
   state = {
      score: 0,
      highScore: 0,
      kittens: kittens,
      guessMessage: 'Click a kitten to play!'
   };


   handleGuess = event => {
      event.preventDefault();
      // get id of kitten clicked
      const id = Number(event.target.id);
      // create new kitten object to change properties individually
      const kittens = Object.assign(this.state.kittens);
      // find kitten index of the event.target id to also find its guessed state
      const i = kittens.findIndex(elem => elem.id === id);

      console.log('\n|========================= Clicked Kitten Info =========================|\n\n')
      console.log('id:', id);
      console.log('already guessed?:', kittens[i].guessed);

      // if correct guess
      if (!kittens[i].guessed) {
         if (this.state.highScore === this.state.score) {
            // new high score reached
            this.incrementScore(kittens, i, this.state.highScore + 1, 'Correct guess!');
         } else {
            // no new high score reached
            this.incrementScore(kittens, i, this.state.highScore, 'Correct guess!');
         }
         // also check win condition(if they guess all correctly)
         if (this.state.score === kittens.length - 1) {
            this.resetGame(kittens, 'You win! Play again!');
         }
         // if incorrect guess
      } else {
         this.resetGame(kittens, 'Incorrect guess! Play again!');
      }
   }


   incrementScore = (kittens, i, newHighScore, guessMessage) => {
      // set clicked kitten's guessed state to true
      kittens[i].guessed = true;
      // update score/kittens states
      this.setState({
         score: this.state.score + 1,
         highScore: newHighScore,
         kittens: kittens,
         guessMessage: guessMessage
      });
   }


   resetGame = (kittens, guessMessage) => {
      // change all kittens' guessed states back to false
      kittens.forEach(elem => {
         elem.guessed = false;
      });
      // reset score and update all kittens' states
      this.setState({
         score: 0,
         kittens: kittens,
         guessMessage: guessMessage
      });
   }


   render() {
      return (
         <div id="main-container">
            {console.log('\n|============================== New State ==============================|\n\n')}
            {console.log('score:', this.state.score)}
            {console.log('highScore:', this.state.highScore)}
            {console.log('kittens:\n', this.state.kittens)}
            <Navbar
               score={this.state.score}
               highScore={this.state.highScore}
               guessMessage={this.state.guessMessage}
            />
            <Jumbotron />
            <KittenFlex
               kittens={this.state.kittens}
               handleGuess={this.handleGuess}
            />
         </div>
      );
   }
}

export default App;