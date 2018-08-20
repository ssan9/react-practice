import React, { Component } from 'react';
import List from "./list";
import AddForm from "./add-form";
class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        lists: [
          {
            title: 'Example list 1'
          }, 
          {
            title: 'Example list 2'
          }
        ]
      }
  }

  addList(title) {
        this.setState({
            lists: [...this.state.lists, {title}]
        });
    }

  render() { //why can't we use onAdd like the way we use onClick?
    const lists = this.state.lists.map((list, index) => (
        <li key={index}>
          <List {...list} />
        </li>
      ))
    return (
      <div className="App">
        <h1>Example Board</h1>
        <ul>{lists}</ul>
        <AddForm type="list" 
        onAdd={text => this.addList(text)} 
/>
      </div>
    );
  }
}

export default App;
