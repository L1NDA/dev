import React from 'react';

class Input extends React.Component {

    constructor() {
    super();
    this.state = {input: ""};
  }
  
  _handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      input: value
    });
  }
  
  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log(event);
      event.preventDefault();
      this.setState({
        input: event.target.value + "\n• "
      });
    }
  }

  render() {
      
    return (
      <div className="input">
        <textarea className="input-text"
          type="text"
          value={this.state.input}
          onInput={this._handleInput}
          onKeyPress={this._handleKeyPress}/>
      </div>
        
    )
  }

}

export default Input;