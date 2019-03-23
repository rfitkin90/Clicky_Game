import React, { Component } from 'react';
// import components
import KittenCard from './kitten-card';
// import json object
import kittens from "../kittens.json";


class KittenFlex extends Component {
   state = {
      guessed: false
   };

   handleGuess = () => {
      if (!this.state.guessed) {
         this.setState({ guessed: true })
      }
   };

   render() {
      return (
         <div className="kitten-flexbox d-flex flex-wrap">
            {kittens.map(elem => (
               <KittenCard
                  id={elem.id}
                  image={elem.image}
                  guessed={this.state.guessed}
                  handleGuess={this.handleGuess}
               />
            ))}
         </div>
      );
   }
}

export default KittenFlex;