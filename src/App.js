import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fontColor: 'black';
      fontSize: 12;
      fontFamily: 'monospace';
      allowEdit: 'true';
    };

  }

  updateColor(val) {
    this.setState({fontColor: val});
  }
  this.updateColor = this.updateColor.bind(this);


  updateSize(val){
    this.setState({fontSize: val});
  }
  this.updateSize = this.updateSize.bind(this);


  updateFamily(val) {
    this.setState({fontFamily: val});
  }
  this.updateFamily = this.updateFamily.bind(this);


  updatedEditStatus(val){
    this.setState({allowEdit: val});
  }
  this.updateEditStatus = this.updaeEditStatus.bind(this);
  

  render() {
    return (
      <div>
        <div className="headerBar">
          EditToggle update ={ this.upateEditStatus}/>
          ColorChanger update = {this.updateColor}/>
          ColorChanger allowEdit = {this.allowEdit}/>
          SizeChanger update = {this.updateSize}/>
          SizeCHanger allowEdit = {this.allowEdit}/>
          FamilyChanger update = {this.updateFamily}/>
          FamilyChanger allowEdit = {this.allowUpdate}/>

        </div>
        <div className="textArea"> TextContainer fontcolor = {this.fontColor}/>
          TextContainer fontSize = {this.fontSize}/>
          TextContainer fontFamily = {this.fontFamily}/></div>
      </div>
    );
  }
}

export default App;
