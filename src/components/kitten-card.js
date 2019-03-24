import React, { Component } from 'react';

class KittenCard extends Component {
   state = {
      guessed: false
   };

   handleGuess = async () => {
      if (!this.state.guessed) {
         this.setState({ guessed: true })
         await this.props.incrementScore();
         console.log('score:', this.props.score);
         if (this.props.score === 12) {
            
         }
      }
   };

   render() {
      return (
         <div>
            <img src={this.props.image} className="kitten-card" id={this.props.id}
               width="200" height="200" onClick={this.handleGuess} />
         </div>
      );
   }
}

export default KittenCard;