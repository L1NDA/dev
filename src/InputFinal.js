import React from 'react';
import classNames from 'classnames'
import { storeData, pullData } from './Database.js'


class InputTestCaret extends React.Component {

  constructor() {
    super();
    this.state = {input: ""};
  }
  
  // componentWillUnmount() {
  //   storeData(this.state.input);
  // }
  
/*  componentWillMount() {
    var oldNotes = pullData(this.props.leaf)
      .then((res) => {
        // this.setState({
        //     input: res
        //   })
          this.props.save(res, this.props.leaf)
      })
  }
  */
  // componentDidUpdate(prevProps, prevState) {
  //   // this.props.save(this.state.input, this.props.leaf)
  // }
  
/*  writeUserData = () => {
    firebase.database().ref('leafOne/').set({
      leafOne: this.state.input,
    });
  }*/
  
/*  componentWillMount() {
  this.firebaseRef = new firebase("https://div-1c0c2.firebaseio.com/leaf1/");
  this.firebaseRef.on("child_added", function(dataSnapshot) {
    this.items.push(dataSnapshot.val());
    this.setState({
      input: "input added"
    });
  }.bind(this));
}*/
  
/*  componentDidMount() {
    const rootRef = firebase.database().ref().child("div-1c0c2");
    const notesRef = rootRef.child("leafOne");
    notesRef.on("value", snap => {
      console.log(snap.val);
      this.setState({
        input: snap.val()
      })
    });
  }*/

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

  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      var array = event.target.value.split("");
      var arrayNew = [];
      var myElement; 
      
      console.log(this.refs[this.props.leaf.leaf]);
      
      var startPosition = this.refs[this.props.leaf.leaf].selectionStart;
      var endPosition = this.refs[this.props.leaf.leaf].selectionEnd;
        
      console.log("position: " + startPosition);
      console.log("position word: " + array[startPosition]);
      
      array.splice([startPosition], 0, "\n• ");
      console.log("after splice: " + array);
      arrayNew = array.join("");
      console.log("after join: " + arrayNew);
        
        // this.setState({
        //   input: arrayNew
        // }, () => this.refs[this.props.leaf].selectionEnd = startPosition + 3);
        
      this.props.save(arrayNew, this.props.leaf)
      
      this.refs[this.props.leaf.leaf].selectionEnd = startPosition + 3
    } 
    
}

  reset = () => {
    if (this.props.leaf.note === "" || this.props.leaf.note === "•") {
      this.props.save("• ", this.props.leaf);
    }
  }

  _handleInput = (event) => {
    
    var value = event.target.value;
    // this.setState({
    //   input: value
    // }, () => this.reset() );
    this.props.save(value, this.props.leaf)
    this.reset()
  }

  render() {
    
    const textAreaClasses = classNames({
      'input-text': true,
      'one': this.props.leaf === 'one',
      'two': this.props.leaf === 'two',
      'three': this.props.leaf === 'three',
      'four': this.props.leaf === 'four'
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

export default InputTestCaret;