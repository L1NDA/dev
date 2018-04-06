import React from 'react';
import InputFinal from './InputFinal'
import './Table.css'
import { _storeData, _pullData } from './Database.js'
import debounce from 'lodash/debounce';


class Table extends React.Component {

  constructor() {
    super();
    this.state = {
      leafs: [],
      isSaving: false,
    }
  }

  componentWillMount = () => {
      var data = this.props.leafs
      this.setState({
        leafs: data,
        });
  }

  saveNote = (input, passedLeaf) => {
    var leafs = this.state.leafs
    var updatedLeafs = leafs.map((leaf) => {
      if(leaf.leaf === passedLeaf.leaf) {
        leaf.note = input
      }
      return leaf
    })

    this.setState({
      ...this.state,
      leafs: updatedLeafs
    }, () => {const debounced = debounce(this.storeData, 1500);
      debounced()})
  }

  storeData = () => {
    _storeData(this.state.leafs);
    const debounced = debounce(this.savingState, 2000);
    debounced()
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

    return (

      <div className="table-container fadeIn">
      {this.state.isSaving
      ? <div className="saved">

        </div> : null }

      <div className="title flex-title">
        <div className="vertical-titles urgent">urgent</div>
        <div className="vertical-titles noturgent">not urgent</div>
      </div>

      <div className="table fadeIn">
          {this.state.leafs.map((leaf) => {

            return (

              <div className={`leaf-wrapper leaf-wrapper-${leaf.leaf}`}>

              {leaf.hasTitle
                ? (leaf.leaf !== 'three'
                    ? <div className={`title ${leaf.titleText.replace(/\s/g,'')}`}>{leaf.titleText}</div>
                    : null)
                : null }

                <div className={`leaf fadeIn ${leaf.leaf}`}>
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
