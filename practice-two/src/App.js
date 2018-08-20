import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./contact";

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        contacts:[
          {
            name: 'Alice Aardvark',
            photo: 'https://api.adorable.io/avatars/64/alice%40thinkful.com',
            address: '1600 Pennsylvania Ave'
          },
          {
            name: 'Bob Bear',
            photo: 'https://api.adorable.io/avatars/64/bob%40thinkful.com',
            address: '725 5th Ave'
          },
          {
            name: 'Carol Coyote',
            photo: 'https://api.adorable.io/avatars/64/carol%40thinkful.com',
            address: '4 Pennsylvania Plaza'
          }
        ]
      }
  }

  render() {
    const array = this.state.contacts.map((contact, index) => (
        <li key={index}>
          <Contact {...contact} />
        </li>  
      ))

    return (
      <div className="App">
        <ul>{array}</ul>
      </div>
    );
  }
}

export default App;
