import React from 'react';

class InputTest extends React.Component {

    constructor() {
    super();
    this.state = {input: []};
  }
  
  _handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      input: value
    });
  }
  
  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.setState({
        input: input.concat(event.target.value + "\n• ")
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

export default InputTest;