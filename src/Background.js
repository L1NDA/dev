import React from 'react';

class Background extends React.Component {

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
      setTimeout( this.changeState, 1000)
    }
    
    changeState = () => {
      this.setState({
        load: true
      })
    }
    
    
    render() {
      return (
          <div className="background-container">
            {this.state.load ?
            <div className="background fadeIn">
              </div> : null}
          </div>
      )
  }
  
}



export default Background;