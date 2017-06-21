import React from 'react';
import Notes from './Notes.js';
import Table from './Table.js';
import Clock from './Clock.js';

class Container extends React.Component {


  render() {
      
    return (
      <div className="container">
        <Clock />
        <Notes />
        <div className="line"></div>
        <Table/>
        <div className="contact-box"><div className="contact">problems?</div><div  className="contact contact-link"><a href="mailto:qinx@college.harvard.edu" className="contact-link">let us know</a></div></div>
        
      </div>
        
    )
  }

}

export default Container;

// <img src={require('./static/icon.png')} className="icon"/>