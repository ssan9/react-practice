import React, { Component } from 'react';
import SurpriseImage from "./surprise-image";
import SurpriseButton from "./surpise-button";

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        display: "button"
      }

  }

  displayComponent(component) {
    this.setState({
      display: component
    })
  }

  render() {
    if(this.state.display==="button") {
      return <SurpriseButton onClick={()=>this.displayComponent("ïmage")} />
    }
    else {
      return <SurpriseImage onClick={()=>this.displayComponent("button")} />
    }
  }
}

export default App;
