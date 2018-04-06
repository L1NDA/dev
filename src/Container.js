import React from 'react';
import Notes from './Notes.js';
import Table from './Table.js';
import Clock from './Clock.js';
import cookie from 'react-cookies'
import { _storeNotes, _pullNotes, _storeData, _pullData } from './Database.js'
import uuidv4 from 'uuid/v4';

class Container extends React.Component {

  constructor() {
  super();
  this.state = {
    notes: "",
    leafs: [
      {
        leaf: 'one',
        note: '',
        hasTitle: true,
        hasTitleSide: true,
        titleText: 'important',
        titleTextSide: 'urgent'
      },
      {
        leaf: 'two',
        note: '',
        hasTitle: true,
        titleText: 'not important',
      },
      {
        leaf: 'three',
        note: '',
        hasTitle: true,
        titleText: 'not urgent'
      },
      {
        leaf: 'four',
        note: ''
      }]
    }
  }

  componentWillMount() {
    var data = _pullData()
    if (data != null) {
      var notes = _pullNotes()
      this.setState({
        leafs: data,
        notes: notes
      })
    };
  }

  render() {

    return (
      <div className="container">
        <Clock />
        <div className="notes-container">
          <Notes notes={this.state.notes}/>
        </div>
        <div className="line"></div>
        <Table leafs={this.state.leafs}/>
        <div className="creds">CZ & LQ for i_X</div>
        <div className="contact-box"><div className="contact">problems?</div><div  className="contact contact-link"><a href="mailto:qinx@college.harvard.edu" className="contact-link">let us know</a></div></div>

      </div>

    )
  }

}

export default Container;
