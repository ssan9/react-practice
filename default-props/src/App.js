import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// change code below this line
ShoppingCart.defaultProps = {
  items: 0
}

export default ShoppingCart;
