import React from 'react';
import InputFinal from './InputFinal'
import './Table.css'
import cookie from 'react-cookies'
import { storeData, pullData } from './Database.js'

// import LeafOne from './LeafOne.js'
// import LeafTwo from './LeafTwo.js'
// import LeafThree from './LeafThree.js'
// import LeafFour from './LeafFour.js'

class Table extends React.Component {
  
  state = {
    leafs: [
      {
        leaf: 'one',
        note: '',
        hasTitle: true,
        titleText: 'important'
      },
      {
        leaf: 'two',
        note: '',
        hasTitle: true,
        titleText: 'not important'
      },
      {
        leaf: 'three',
        note: ''
      },
      {
        leaf: 'four',
        note: ''
      },
    ]
  }
  
  componentWillMount() {
    pullData()
      .then((res) => {
        this.setState({
          leafs: res
          });
        // this.props.save(res, this.props.leaf)
      });
  }
  
  
  saveNote = (input, passedLeaf) => {
        // storeData(this.state.input, this.props.leaf);
    var leafs = this.state.leafs 
    var updatedLeafs = leafs.map((leaf) => {
      if(leaf.leaf === passedLeaf.leaf) {
        leaf.note = input
      }
      return leaf
    })
    console.log('updated leafs', updatedLeafs)
    this.setState({
      ...this.state,
      leafs: updatedLeafs
    })
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.state.leafs) {
      console.log(prevProps + " vs " + this.state.leafs);
      storeData(this.state.leafs);
    }
    // this.props.save(this.state.input, this.props.leaf)
  }
  
  render() {
      
    return (
      <div className="table">
        <div className="leafs">
          {this.state.leafs.map((leaf) => {
          console.log('leaf', leaf)
            return (
               <div className="leaf-wrapper">
                {leaf.hasTitle ? <div className="title important">{leaf.titleText}</div> : null}
                <div className={`leaf ${leaf.leaf}`}>
                  <InputFinal leaf={leaf} save={this.saveNote}/>
                </div>
              </div>
            )
          })}
          
        </div>
         <div className="vertical-titles">
           
           
        </div>
      </div>
    );
  }

}

export default Table;


    // <table className="table">
    //     <tbody>
    //       <tr>
    //         <td><div className="title none side"></div></td>
    //         <td> <div className="title important">important</div> </td>
    //         <td>  <div className="title notImportant">not important</div> </td>
    //       </tr>
    //       <tr>
    //         <td className="side"> <div className="title urgent">urgent</div> </td>
    //         <td><LeafOne save={this.saveNote}/></td>
    //         <td><LeafTwo save={this.saveNote}/></td>
    //       </tr>
    //       <tr>
    //         <td className="side"><div className="title notUrgent">not urgent</div></td>
    //         <td><LeafThree save={this.saveNote}/></td>
    //         <td><LeafFour save={this.saveNote}/></td>
    //       </tr>
    //     </tbody>
    //   </table>