import React from 'react';
import Notes from './Notes.js';
import Table from './Table.js';

class Container extends React.Component {


  render() {
      
    return (
      <div className="container">
        <Notes />
        <div className="line"></div>
        <Table/>
        <div className="contact">Problems? <br/><a href="mailto:qinx@college.harvard.edu" className="contact-link">Let us know!</a></div>
      </div>
        
    )
  }

}

export default Container;