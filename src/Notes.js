import React from 'react';
import { storeNotes, pullNotes } from './Database.js'
import debounce from 'lodash/debounce';
import $ from 'jquery';
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';

class Notes extends React.Component {
  
  constructor() {
  super();
  this.state = {
    userId: "",
    notes: "",
    leafs: [],
    isSaving: false,
    quote: [],
    quotesClick: false 
  }
  }
  
 componentWillMount = () => {

    var id = this.props.userId;
    pullNotes(id)
    .then((res) => {
      // console.log("there is an id notes" + id);
      pullNotes(id)
        .then((res) => {
          this.setState({
            userId: id,
            notes: res
            })
          // this.props.save(res, this.props.leaf)
        });
    })
    {this.quotes()}

}

  showSettings = (event) => {
    event.preventDefault();
  }
  
/*  componentWillMount() {
    {this.quotes()}
  }*/
  
/*  componentWillMount() {
    console.log("notes userId/notes: " + this.state.notes + this.state.userId);
    storeData(this.state.leafs, this.state.userId);
  }*/
  
/*  componentWillMount = () => {
    console.log("component mounted")
    var id;
    id = cookie.load('userId');
    console.log("notes id: " + id)
    // cookie.remove('userId', { path: '/' })
    console.log("notes id: " + id)
      pullNotes(id)
        .then((res) => {
          this.setState({
            userId: id,
            notes: res
            });
            
          // this.props.save(res, this.props.leaf)
        });
      // cookie.remove('userId', { path: '/' });
    }*/
  
/*  quoteState = (response) => {
    this.setState({
      quote: response.quoteText,
      author: response.quoteAuthor
      })
    console.log("state quote: " + this.state.quote + "response quote: " + response)
  }*/
  
  
  quotes = () => { 
    var that = this;
    $.ajax({
      method: "GET",
      url: `https://api.forismatic.com/api/1.0/`,
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        if (response.quoteText.length > 100 || response.quoteText.length < 45) {
          that.quotes();
        } else if (response.quoteText.slice(-1) === ' ') {
            var temp = response.quoteText;
            
            while(temp.slice(-1) === ' ') {
              temp = temp.slice(0, -1);
              
            }
            var newQuoteText = temp;
            that.setState({
              quote: newQuoteText,
              author: response.quoteAuthor
              })
          
          } 
          else {
            // console.log("else function")
            // console.log('last char: ', response.quoteText.slice(-1))
            that.setState({
              quote: response.quoteText,
              author: response.quoteAuthor
              }/*, () => console.log('quote: ', that.state.quote) */)
            
          }
          
      }
    });
  }
  
  _handleInput = (event) => {
    var value = event.target.value;
    this.setState({
      notes: value
    }, () => {const debounced = debounce(this.stateNotes, 1500);
      debounced()});
  }
  
  stateNotes = () => {
    storeNotes(this.state.notes, this.props.userId)
    .then((res) => {
      const debounced = debounce(this.savingState, 2000);
      debounced()
    })
  }
  
  savingState = () => {
    this.setState({
        isSaving: true
      })
    setTimeout( this.revertState, 1000);
        
  }
  
  revertState = () => {
    this.setState({
    isSaving: false
    })
  }
  
  _handleQuotesClick = () => {
    this.quotes()
  }

  render() {
    
    // console.log("notes prop: " + this.props.userId)
    
    return (
/*      <ResizableBox
        height={1000}
        width={400}
        axis="x"
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>*/
        // <div className="drag-container">
          <div className="notes-box-container">
          <div className="notes-box fadeIn">
            <div className="notes-title">notes</div>
            <textarea className="notes-text"
                      type="text"
                      // placeholder="Make a note!"
                      value={this.state.notes}
                      onInput={this._handleInput}
                      onKeyPress={this._handleKeyPress}/>
            <div className="quote-container">
            {this.state.quote ? 
              <div className="quotes" onClick={this._handleQuotesClick}>
                <i className="quote">"{this.state.quote}"</i>
                {this.state.author ? <i className="author">-{this.state.author}</i> : <i className="author">-Unknown</i>}
              </div> : null }
            </div>
          </div>
          <div className="line fadeIn"></div>
          </div>
        // </div>
      // </ResizableBox>
    )
  }

}

export default Notes;