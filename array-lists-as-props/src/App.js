import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list';
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks = {["walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks = {["walk dog", "workout", "eat"]}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

export default ToDo;
