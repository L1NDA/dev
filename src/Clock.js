import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  
  constructor() {
    super();
    this.state= {
      
    }
  }
  
  componentWillMount = () => {
    this.setState({
      time: moment().format('h:mm a'),
      day: moment().format('ddd'),
      dateOfMonth: moment().format("D")
    });
  }
  
  componentDidMount = () => {
    var interval = setInterval(this.updateDate, 100)
  }
  
  updateDate = () => {
    this.setState({
      time: moment().format('h:mm a'),
      day: moment().format('ddd'),
      dateOfMonth: moment().format("D")
    });
  }
  

  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }
  

    
  render() {
    
    return(
        <div className="date">
          <div className="dayDate">
            <div className="day">
              {this.state.day}
            </div>
            <div className="dateOfMonth">
              {this.state.dateOfMonth}
            </div>
          </div>
          
          <div className="time">
            {this.state.time}
          </div>
          
        </div>
        
      
    )
  }
  
}

export default Clock;