import React from 'react';
import InputFinal from './InputFinal'
import './Table.css'
import { storeData, pullData } from './Database.js'
import debounce from 'lodash/debounce';

// Load the full build. 
// var _ = require('lodash');

// import LeafOne from './LeafOne.js'
// import LeafTwo from './LeafTwo.js'
// import LeafThree from './LeafThree.js'
// import LeafFour from './LeafFour.js'


class Table extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userId: "",
      leafs: [],
      isSaving: false
    }
  }
  
  componentWillMount = () => {
      var id = this.props.userId
      // console.log("table id: " + id)
      pullData(id)
        .then((res) => {
          // console.log("table resId: " + id)
          // console.log("table leafs: " + res)
          this.setState({
            userId: id,
            leafs: res,
            });
            
          // this.props.save(res, this.props.leaf)
        })}
      
      // cookie.remove('userId', { path: '/' })
  
/*  componentWillMount() {
    console.log("userId/leafs: " + this.state.leafs + this.state.userId);
    storeData(this.state.leafs, this.state.userId);
  }*/
  
  /*componentWillMount() {
    var id;
    if (cookie.load('userId') === undefined) {
      id = uuidv4();
      cookie.save('userId', id, { path: '/' });
      console.log("no id: " + id);
        this.setState({
          userId: id,
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
        }, storeData(this.state.leafs, this.state.userId));
        
    } else {
      id = cookie.load('userId');
      console.log("there is an id " + id);
      console.log("table doc cookie: " + document.cookie)
      pullData(id)
        .then((res) => {
          this.setState({
            userId: id,
            leafs: res
            }, console.log("userId/leafs: " + this.state.leafs + this.state.userId));
            
          // this.props.save(res, this.props.leaf)
        });
      // cookie.remove('userId', { path: '/' })
    }
  }*/
  
  
  saveNote = (input, passedLeaf) => {
        // storeData(this.state.input, this.props.leaf);
    var leafs = this.state.leafs 
    var updatedLeafs = leafs.map((leaf) => {
      if(leaf.leaf === passedLeaf.leaf) {
        leaf.note = input
      }
      return leaf
    })
    // console.log('updated leafs', updatedLeafs)
    this.setState({
      ...this.state,
      leafs: updatedLeafs
    }, () => {const debounced = debounce(this.storeData, 1500);
      debounced()})
  }
  
  storeData = () => {
    storeData(this.state.leafs, this.state.userId)
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
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.state.leafs) {
      /*console.log(prevProps + " vs " + this.state.leafs);
      // this.props.save(this.state.input, this.props.leaf)
      const debounced = debounce(this.storeData, 3000);
      debounced()*/
    }
  }
  
  render() {
      
    /*if (!this.state.leafs) {
      return (
        <div></div>
      )
    }*/
      
    return (
      
      <div className="table-container fadeIn">
      {this.state.isSaving 
      ? <div className="saved">
       
        </div> : null }
      <div className="title flex-title">
        <div className="vertical-titles urgent fadeIn">urgent</div>
        <div className="vertical-titles noturgent fadeIn">not urgent</div>
      </div>
      
      <div className="table fadeIn">
          {this.state.leafs.map((leaf) => {
          // console.log('leaf', leaf)
            return (
              
              <div className={`leaf-wrapper leaf-wrapper-${leaf.leaf}`}>
              
              {leaf.hasTitle 
                ? (leaf.leaf !== 'three'
                    ? <div className={`title ${leaf.titleText.replace(/\s/g,'')}`}>{leaf.titleText}</div> 
                    : null) 
                : null }
                    
              
              
                <div className={`leaf ${leaf.leaf}`}>
                  <InputFinal leaf={leaf} save={this.saveNote}/>
                </div>
                </div>
            )
          })}
          
          <div className="title dynamic-title"> impt+urg </div>
          
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