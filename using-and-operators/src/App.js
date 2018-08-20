import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
};

export default MyComponent;
