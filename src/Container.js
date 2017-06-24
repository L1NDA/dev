import React from 'react';
import Notes from './Notes.js';
import Table from './Table.js';
import Clock from './Clock.js';
import cookie from 'react-cookies'
import { storeNotes, pullNotes, storeData } from './Database.js'
import uuidv4 from 'uuid/v4';

class Container extends React.Component {

  constructor() {
  super();
  this.state = {
    notes: "",
    leafs: [],
    loaded: false
  }
  }
  
  componentWillMount() {
  // var id = cookie.load('userId');
  var id = localStorage.userId  
  
  // console.log("cookie load: " + id)
  if (id === undefined) {
    id = uuidv4();
  }
  // console.log("container id: " + id)
  pullNotes(id)
    .then((res) => {
      if (res === null) {
      id = uuidv4();
      cookie.save('userId', id, { path: '/' });
      localStorage.setItem('userId', id)
      // console.log("no id container: " + id);
        this.setState({
          userId: id,
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
            },
          ]
        })
        // console.log("state userId: " + this.state.userId),
        // console.log("state leafs: " + this.state.leafs),
        storeData(this.state.leafs, this.state.userId),
        storeNotes(this.state.notes, this.state.userId)
        
    } else {
      // id = cookie.load('userId');
      // console.log("res container: " + res)
      // console.log("there is an id container" + id);
      
      pullNotes(id)
        .then((res) => {
          this.setState({
            userId: id,
            notes: res
            }/*,  console.log("res: " + res)*/)
          // this.props.save(res, this.props.leaf)
        });
    }
    })
  }

  render() {
      
    return (
      <div className="container">
        <Clock />
        <div className="notes-container">
          {this.state.userId ?
          <Notes userId={this.state.userId}/> : null }
        </div>
        <div className="line fadeIn"></div>
        <div className="table-loading">
          {this.state.userId ? 
          <Table userId={this.state.userId}/> : null}
        </div>
        <div className="creds">CZ & LQ for i_X</div>
        <div className="contact-box"><div className="contact">problems?</div><div  className="contact contact-link"><a href="mailto:qinx@college.harvard.edu" className="contact-link">let us know</a></div></div>
        
      </div>
        
    )
  }

}

export default Container;

// <img src={require('./static/icon.png')} className="icon"/>