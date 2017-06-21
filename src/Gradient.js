import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Gradient extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     mounted: false
  //   }
  // }
  
  // componentDidMount() {
  //   // if(this.props.bgMounted) {
    
    
  //     this.setState({
  //       mounted: true
  //     });
      
  // // }
  // }
  
  

  render() {
    
    return (
      <ReactCSSTransitionGroup
        transitionName="gradientTransition"
        transitionAppear={true}
        transitionAppearTimeout={3000}
        transitionEnter={false}
        transitionLeave={false}>
          <div className="gradient">
          </div>
          
      </ReactCSSTransitionGroup>  
        
    )
  }

}

export default Gradient;