import React, { Component } from 'react';

class Jumbotron extends Component {
   render() {
      return (
         <div className="jumbotron jumbotron-fluid">
            <div className="container">
               <h1>Kitten Memory Game</h1>
               <p>Click on a kitten to gain a point, but don't click on any more than once!</p>
            </div>
         </div>
      );
   }
}

export default Jumbotron;