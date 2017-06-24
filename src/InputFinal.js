import React from 'react';
import classNames from 'classnames'
var mousePosition;

class InputFinal extends React.Component {

  constructor() {
    super();
    this.state = {input: ""};
  }

  _handleFocus = (event) => {
    if (this.props.leaf.note === "") {
      // this.setState({
      //   input: "• "
      // }, () => this.refs[this.props.leaf].selectionEnd = 2)
      this.props.save("• ", this.props.leaf)
      this.refs[this.props.leaf].selectionEnd = 2
    }
  }
  
  _handleBlur = (event) => {
    if (this.props.leaf.note === "• " || this.props.leaf.note === "•") {
      // this.setState({
      //   input: ""
      // })
      this.props.save("", this.props.leaf)
    }
  }

  reset = () => {
    if (this.props.leaf.note === "" || this.props.leaf.note === "•") {
      this.props.save("• ", this.props.leaf);
    }
  }

  _handleInput = (event) => {
    
    var value = event.target.value;
    this.props.save(value, this.props.leaf)
    console.log("position: " + this.refs[this.props.leaf.leaf].selectionStart);
    this.reset()
  }
  
 _handleKeyPress = (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      var array = event.target.value.split("");
      var arrayNew = [];
      var startPosition = this.refs[this.props.leaf.leaf].selectionStart;
      var endPosition = this.refs[this.props.leaf.leaf].selectionEnd;
        
      console.log("position: " + startPosition);
      // console.log("position word: " + array[startPosition]);
      array.splice([startPosition], 0, "\n• ");
      // console.log("after splice: " + array);
      arrayNew = array.join("");
      this.props.save(arrayNew, this.props.leaf);
      // console.log("after join: " + arrayNew);
      mousePosition = endPosition;
      console.log("endPosition: " + endPosition);
      console.log("refs selection end: " + this.refs[this.props.leaf.leaf].selectionEnd)
      this.moveMouse(mousePosition);
      
/*      this.refs[this.props.leaf.leaf].selectionEnd = endPosition + 3;
      // this.refs[this.props.leaf.leaf].selectionStart = startPosition + 3;
      // var caretNew = startPosition + 3;
      // this.refs[this.props.leaf.leaf].setSelectionRange(caretNew, caretNew);
      // console.log("caretNew: " + caretNew)
      console.log("refs selection: " + this.refs[this.props.leaf.leaf].selectionEnd)*/

    } 
    
}

  moveMouse(mousePosition) {
    // this.refs[this.props.leaf.leaf].selectionEnd = mousePosition + 3;
    var mousePlace = mousePosition + 3;
      // this.refs[this.props.leaf.leaf].selectionStart = startPosition + 3;
      // var caretNew = startPosition + 3;
    this.refs[this.props.leaf.leaf].setSelectionRange(mousePlace, mousePlace);
      // console.log("caretNew: " + caretNew)
    console.log("move mouse selection: " + this.refs[this.props.leaf.leaf].selectionEnd)
  }

  render() {
    
    const textAreaClasses = classNames({
      'input-text': true,
      'one': this.props.leaf.leaf === 'one',
      'two': this.props.leaf.leaf === 'two',
      'three': this.props.leaf.leaf === 'three',
      'four': this.props.leaf.leaf === 'four'
    })

    return (
      <div className="input">
        <textarea className={textAreaClasses}
          type="text"
          ref={this.props.leaf.leaf}
          value={this.props.leaf.note}
          onInput={this._handleInput}
          onKeyPress={this._handleKeyPress}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          id="text-element-one"/>
      </div>
    )      
   
  }

}

export default InputFinal;