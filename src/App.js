import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Background from './Background.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container/>
        <Background/> 
      </div>
    );
  }
}

export default App;
