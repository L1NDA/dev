import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';
import Background from './Background.js';
import Clock from './Clock.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Gradient from './Gradient.js';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      willShowGradient: false
    };
  }
  
  update = () => {
    this.willShowGradient = true;
  }
  
  componentDidMount = () => {
    setTimeout(this.update, 3000);
  }
  
  render() {
    return (
      <div className="App">
        <Container/>
        
        {this.willShowGradient ? <Gradient /> : null}
        
        <Background/>
        <Clock />
      </div>
      
    );
  }
}

export default App;
