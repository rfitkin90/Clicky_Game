import React, { Component } from 'react';
// import components
import KittenCard from './kitten-card';


class KittenFlex extends Component {

   shuffle = array => {
      let counter = array.length;
      // While there are elements in the array
      while (counter > 0) {
         // Pick a random index
         let index = Math.floor(Math.random() * counter);
         // Decrease counter by 1
         counter--;
         // And swap the last element with it
         let temp = array[counter];
         array[counter] = array[index];
         array[index] = temp;
      }
      return array;
   }


   render() {
      return (
         <div className="container kitten-flexbox d-flex flex-wrap">
            {this.shuffle(this.props.kittens).map(elem => (
               <KittenCard
                  key={elem.id}
                  id={elem.id}
                  image={elem.image}
                  guessed={elem.guessed}
                  handleGuess={this.props.handleGuess}
               />
            ))}
         </div>
      );
   }
}

export default KittenFlex;