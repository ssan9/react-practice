import React, { Component } from 'react';
import SurpriseImage from "./surprise-image";
import SurpriseButton from "./surprise-button";

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        display: false
      }
      this.displayComponent= this.displayComponent.bind(this);
  }

  displayComponent() {
    this.setState({
      display: !this.state.display
    })
  }

  render() {
    if(!this.state.display) {
      return <SurpriseButton onClick={this.displayComponent} />
    }
    else {
      return <SurpriseImage onClick={this.displayComponent} />
    }
  }
}

export default App;
