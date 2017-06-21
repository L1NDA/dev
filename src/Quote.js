import React from 'react';

var quotes = [
  "hi", "this", "is", "a", "test"
  ];

class Quote extends React.Component {
  
  constructor() {
    super();
    this.state= {
      
    }
  }
  
  quoteRandom() {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
  }
  
  

    
  render() {
    
    return(
      <div className="quote">
      
      </div>
      
    )
  }
  
}

export default Quote;