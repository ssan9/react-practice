import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OnlyEvens from './only-evens';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  addValue = () => {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

export default Controller;
