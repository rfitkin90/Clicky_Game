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
               // any otherway to pass this as a boolean besides using 
               checked={this.props.guessed}
               width="200" height="200"
               // no way to pass parameters here?
               onClick={this.props.handleGuess}
            // onClick={this.props.handleGuess(this.props.id, this.props.guessed)}
            />
         </div>
      );
   }
}

export default KittenCard;