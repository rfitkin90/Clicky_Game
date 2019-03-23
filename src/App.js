import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import KittenFlex from './components/kitten-flex';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <KittenFlex />
      </div>
    );
  }
}

export default App;