import React, { Component } from 'react';

class KittenCard extends Component {
   state = {
      guessed: this.props.guessed
   };

   handleGuess = async () => {
      // if user makes a correct guess
      if (!this.state.guessed) {
         this.setState({ guessed: true })
         await this.props.incrementScore();
         console.log('score:', this.props.score);
         // if user wins
         if (this.props.score === 12) {
            this.props.resetScore();
            console.log('score:', this.props.score);
         }
      }
   };

   render() {
      return (
         <div>
            <img src={this.props.image} className="kitten-card" id={this.props.id}
               data-guessed={this.state.guessed} width="200" height="200" onClick={this.handleGuess} />
         </div>
      );
   }
}

export default KittenCard;