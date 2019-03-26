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
      console.log('id:', event.target.id);
      console.log('guessed:', event.target.checked);
      // get index of kitten clicked
      const id = Number(event.target.id);
      // create new kitten object to change properties individually
      const kittens = Object.assign(this.state.kittens);
      // if correct guess
      if (!event.target.checked) {
         if (this.state.highScore === this.state.score) {
            // new high score reached
            this.incrementScore(kittens, id, this.state.highScore + 1, 'Correct guess!');
         } else {
            // no new high score reached
            this.incrementScore(kittens, id, this.state.highScore, 'Correct guess!');
         }
         // also check win condition(if they guess all correctly)
         if (this.state.score === kittens.length) {
            this.resetGame(kittens, 'You win! Play again!');
         }
         // if incorrect guess
      } else {
         this.resetGame(kittens, 'Incorrect guess! Play again!');
      }
   }


   incrementScore = (kittens, id, newHighScore, guessMessage) => {
      // find index of clicked kitten's id(since shuffling the array gave it a new index)
      const i = kittens.findIndex(elem => elem.id === id);
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
            {console.log(window.location.origin)}
            {console.log('\n|============================== State Change ==============================|\n\n')}
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
               score={this.state.score}
               highScore={this.state.highScore}
               kittens={this.state.kittens}
               handleGuess={this.handleGuess}
            />
         </div>
      );
   }
}

export default App;