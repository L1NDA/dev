import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Background from './Background.js';
import Clock from './Clock.js'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Gradient from './Gradient.js';


class App extends Component {
  
  
  
  render() {
    return (
      <div className="App">
        <Container/>
        <Gradient />
        <Background/>
        <Clock />
      </div>
      
    );
  }
}

export default App;
