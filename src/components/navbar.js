import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
            <a className="navbar-brand">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <a className="nav-link">Link</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link">Link</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link">Link</a>
                  </li>
               </ul>
            </div>
         </nav>
      );
   }
}

export default Navbar;