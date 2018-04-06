import React from 'react';
import { storeNotes, pullNotes } from './Database.js'
import debounce from 'lodash/debounce';
import $ from 'jquery';

class Notes extends React.Component {

  constructor() {
  super();
  this.state = {
    userId: "",
    notes: "",
    leafs: [],
    isSaving: false,
    quote: []
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
        if (response.quoteText.length > 100) {
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

  render() {

    // console.log("notes prop: " + this.props.userId)

    return (
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
              <div className="quotes">
                <i className="quote">"{this.state.quote}"</i>
                {this.state.author ? <i className="author">-{this.state.author}</i> : null}
              </div> : null }
            </div>
          </div>

    )
  }

}

export default Notes;
