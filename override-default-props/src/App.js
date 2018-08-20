import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './items';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* change code below this line */ }
    return <Items quantity = {10} />
    { /* change code above this line */ }
  }
};

export default ShoppingCart;
