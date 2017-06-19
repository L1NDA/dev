import React from 'react';
import LeafOne from './LeafOne.js'
import LeafTwo from './LeafTwo.js'
import LeafThree from './LeafThree.js'
import LeafFour from './LeafFour.js'

class Table extends React.Component {


  render() {
      
    return (
      <table className="table">
        <tr>
          <td><div className="title none side"></div></td>
          <td> <div className="title important">important</div> </td>
          <td>  <div className="title notImportant">not important</div> </td>
        </tr>
        <tr>
          <td className="side"> <div className="title urgent">urgent</div> </td>
          <td><LeafOne/></td>
          <td><LeafTwo/></td>
        </tr>
        <tr>
          <td className="side"><div className="title notUrgent">not urgent</div></td>
          <td><LeafThree/></td>
          <td><LeafFour/></td>
        </tr>
      </table>
        
    );
  }

}

export default Table;