import React, { Component } from 'react';
// import components
import KittenCard from './kitten-card';
// import json object
import kittens from "../kittens.json";


class KittenFlex extends Component {

   randomizeOrder = (array) => {
      var currentIndex = array.length, temporaryValue, randomIndex;
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

   appendCards = () => {
      // const randomizedArr = this.randomizeOrder(kittens);
      return kittens.map(elem => (
         <KittenCard
            id={elem.id}
            image={elem.image}
            score={this.props.score}
            highScore={this.props.highScore}
            incrementScore={this.props.incrementScore}
            resetScore={this.props.resetScore}
            guessed={this.guessed}
         />
      ))
   }

   render() {
      return (
         <div className="container kitten-flexbox d-flex flex-wrap">
            {this.appendCards()}
         </div>
      );
   }
}

export default KittenFlex;