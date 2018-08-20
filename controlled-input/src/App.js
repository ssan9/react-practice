import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  // change code below this line
  handleInput(event) {
    this.setState({
      input: event.target.value
    });
  }
  // change code above this line
  render() {
    return (
      <div>
        { /* change code below this line */}
          <input type = "text" value = {this.state.input} onChange={this.handleInput}/>
        { /* change code above this line */}
        <p>Input: {this.state.input}</p>
      </div>
    );
  }
};

export default ControlledInput;
