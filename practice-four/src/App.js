import React, { Component } from 'react';
import SurpriseButton from "./surprise-button";
import SurpriseImage from "./surprise-image";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      display: "button"
    }

    this.displayImage=this.displayImage.bind(this);
  }

  displayImage() {
    this.setState({
      display: "image"
    })
  }

  render() {
    if(this.state.display==="button"){
           return <SurpriseButton onClick={this.displayImage} />
        }
  
    else {
          return <SurpriseImage />;
    }        
  }
}

export default App;
