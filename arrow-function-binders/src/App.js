import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!'
    };
  }
  setMessage = () => {
    this.setState({
      message: 'Goodbye!'
    });
  }
  render() {
    return (
      <div>
        <button onClick = {this.setMessage}>Click Me</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

export default MyComponent;
