import React, { Component } from 'react';

class KittenCard extends Component {

   render() {
      return (
         <div>
            <img
               src={this.props.image}
               alt="kitten"
               className="kitten-card"
               id={this.props.id}
               // why can't i pass this as a string using a non-boolean attribute, then turn it into
               // a boolean afterwards with the Boolean() method?
               checked={this.props.guessed}
               width="200" height="200"
               onClick={this.props.handleGuess}
            // no way to pass parameters here?
            // onClick={this.props.handleGuess(this.props.id, this.props.guessed)}
            />
         </div>
      );
   }
}

export default KittenCard;