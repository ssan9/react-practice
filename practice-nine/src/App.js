import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';

function App(props) {
    return (
      <div className="App">
        <h2>Hi</h2>
        <Child />
      </div>
    );
}

export default App;
