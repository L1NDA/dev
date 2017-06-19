import React from 'react';
import Moment from 'react-moment'

class Clock extends React.Component {
  
  constructor() {
    super();
    this.state= {};
    
  }
  
  componentDidMount = () => {
      var time = moment().format('h:mm:ss a');
      this.setState( {
        time: time
      });
    }
    
  
  
  render() {
    <Moment>{this.state.time} </Moment>
    return(
      <div>
        
      </div>
      
    )
  }
  
}

export default Clock;