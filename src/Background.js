import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Background extends React.Component {

    
    render() {

      return (
        <ReactCSSTransitionGroup
        transitionName="backgroundTransition"
        transitionAppear={true}
        transitionAppearTimeout={2500}
        transitionEnter={false}
        transitionLeave={false}>
          <div className="background">
              <img src="https://source.unsplash.com/collection/540595/1600x900"/>
            </div>
        </ReactCSSTransitionGroup>
      )
  }
  
}



export default Background;