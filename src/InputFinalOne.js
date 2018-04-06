import React from 'react';

class InputFinalOne extends React.Component {

    constructor() {
    super();
    this.state = {input: ""};
  }

_handleKeyPress = (event) => {
    

    if (event.key === 'Enter') {
      event.preventDefault();
      var array = event.target.value.split("");
      console.log("array: " + array);
      var arrayNew = [];
        var myElement = document.getElementById('text-element');
        
        var startPosition = myElement.selectionStart;
        var endPosition = myElement.selectionEnd;
        console.log("position: " + endPosition);

        
        array.splice([endPosition], 0, "\n• ");
        console.log("after splice: " + array);
        arrayNew = array.join("");
        console.log("after join: " + arrayNew);
        
        this.setState({
          input: arrayNew
        }, () => myElement.selectionEnd = endPosition + 3);
        
        
    } 
    
}

  _handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      input: value
    });
  }

  render() {
      
    return (
      <div className="input">
        <textarea className="input-text"
          type="text"
          value={this.state.input onInput={this._handleInput}}
          onInput={this._handleInput}
          onKeyPress={this._handleKeyPress}
          id="text-element"/>
      </div>
        
    )
  }

}

export default InputFinalOne;