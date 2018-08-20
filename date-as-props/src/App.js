import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentDate from './current-date';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate date = {Date()}/>
        { /* change code above this line */ }
      </div>
    );
  }
};

export default Calendar;
