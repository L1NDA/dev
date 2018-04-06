import React from 'react';
import classNames from 'classnames'
var mousePosition;

class InputFinal extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  componentWillMount() {
    var note = this.props.leaf.note;
    this.setState({
      data: note,
    });
  }

  _handleFocus = (event) => {
    var value = event.target.value;
    if (value === "" || value === "•") {
      this.setState(
        {
          data: "• "
        },
        () => {
          this.props.save(this.state.data, this.props.leaf)
        }
      );
    }
  }

  _handleBlur = (event) => {
    var value = event.target.value;
    if (value === "• " || value === "•") {
      this.setState(
        {
          data: ""
        },
        () => {
          this.props.save(this.state.data, this.props.leaf)
        }
      );
    }
  }

  _handleChange = (event) => {
    var value = event.target.value;
    if (value === "" || value === "•") {
      event.target.value = "• "
    }
    this.setState(
      {
        data: event.target.value
      });
    this.props.save(value, this.props.leaf);
  }

 _handleKeyPress = (event) => {

    if (event.key === 'Enter') {
      event.preventDefault();
      var array = event.target.value.split("");
      var arrayNew = [];

      var endPosition = this.refs[this.props.leaf.leaf].selectionStart;
      mousePosition = endPosition + 3;

      array.splice([endPosition], 0, "\n• ");
      arrayNew = array.join("");

      this.setState(
        {
          data: arrayNew,
        },
        () => {
          console.log("handle keypress position", mousePosition);
          this.refs[this.props.leaf.leaf].setSelectionRange(mousePosition, mousePosition)
        }
      );

      this.props.save(arrayNew, this.props.leaf);
    }
}

  moveMouse(mousePosition) {
    var mousePlace = mousePosition + 3;
    this.setState({
      mousePosition: mousePlace,
    });
    console.log("move mouse selection: " + this.refs[this.props.leaf.leaf].selectionStart)
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
          onChange={this._handleChange}
          ref={this.props.leaf.leaf}
          value={this.state.data}
          onInput={this._handleInput}
          onKeyDown={this._handleKeyPress}
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          id="text-element-one"/>
      </div>
    )

  }

}

export default InputFinal;
