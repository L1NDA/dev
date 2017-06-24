import React from 'react';

class Gradient extends React.Component {
  
    constructor() {
      super();
      this.state = {
        load: false
      }
    }
    
    componentWillMount() {
      this.changeLoad();
    }
    
    changeLoad = () => {
      setTimeout( this.changeState, 1500)
    }
    
    changeState = () => {
      this.setState({
        load: true
      })
    }
  
  

  render() {
    
    return (
      /*<ReactCSSTransitionGroup
        transitionName="gradientTransition"
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false}>*/
        <div>
        {this.state.load ?
          <div className="gradient fadeIn">
          </div>
        : null} 
        </div>
      /*</ReactCSSTransitionGroup>*/  
        
    )
  }

}

export default Gradient;