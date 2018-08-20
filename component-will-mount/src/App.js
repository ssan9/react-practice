import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // change code below this line
      console.log("Hello")
    // change code above this line
  }
  render() {
    return <div />
  }
};

export default MyComponent;
