import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';

class Parent extends React.Component {
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
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        <Child display={this.state.display}/>
      </div>
    );
  }
};

export default Parent;
