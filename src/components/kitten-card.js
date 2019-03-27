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
               width="200" height="200"
               onClick={this.props.handleGuess}
            />
         </div>
      );
   }
}

export default KittenCard;