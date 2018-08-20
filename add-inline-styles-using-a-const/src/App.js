import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
  // change code above this line
    );
  }
};

export default Colorful;
