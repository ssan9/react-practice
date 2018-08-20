import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GetInput from './get-input';
import RenderInput from './render-input';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
          <GetInput input = {this.state.inputValue} handleInput={this.handleChange}/>
          <RenderInput input = {this.state.inputValue}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

export default MyApp;
