import React, { Component } from 'react';

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = (event) => {
    event.preventDefault()
      this.setState({
        submit: this.state.input
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input
              value = {this.state.input}
              onChange = {this.handleChange}
            />
          { /* change code above this line */ }
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
          <h1>{this.state.submit}</h1>
      </div>
    );
  }
};

export default MyForm;
