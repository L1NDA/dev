import React from 'react';

class Notes extends React.Component {
  
  constructor() {
    super();
    this.state = {
      note: ""
    };
  }
  
  _handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      note: value
    });
  }

  render() {
        
    return (
      <div className="notes-box">
        <p className="notes-title">notes</p>
        <textarea className="notes-text"
                  type="text"
                  // placeholder="Make a note!"
                  value={this.state.note}
                  onInput={this._handleInput}
                  onKeyPress={this._handleKeyPress}/>

      </div>
    )
  }

}

export default Notes;