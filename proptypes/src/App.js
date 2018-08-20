import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './items';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

export default ShoppingCart;
