import React, { Component } from 'react';

class KittenCard extends Component {
   render() {
      return (
         <div>
            <img src={this.props.image} className="kitten-card" width="200" height="200"
               onClick={this.handleGuess} />
         </div>
      );
   }
}

export default KittenCard;