import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-sm bg-light sticky-top" id="main-navbar">
            <ul className="navbar-nav d-flex justify-content-between container">
               {/* <li className="nav-item">
                  <span><strong>Clicky Game</strong></span>
               </li> */}
               <li className="nav-item">
                  <span>{this.props.guessMessage}</span>
               </li>
               <li className="nav-item">
                  <span><strong>Score: </strong>{this.props.score} &nbsp;<strong>/</strong>&nbsp; </span>
                  <span><strong>High Score: </strong>{this.props.highScore}</span>
               </li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;