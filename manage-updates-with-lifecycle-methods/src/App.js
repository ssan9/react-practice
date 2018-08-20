import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from './dialog';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First Message'
    };
  }
  changeMessage = () => {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message}/>
      </div>
    );
  }
};

export default Controller;
