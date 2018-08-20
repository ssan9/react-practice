import React, { Component } from 'react';
import Rate from "./rate";
import Output from "./output";
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      dayRate: 300,
      hours: 8
    }

    this.changeHours=this.changeHours.bind(this);
    this.changeRate=this.changeRate.bind(this);
  }

  changeHours(newHours) {
    this.setState({
      hours: newHours
    })
  }

  changeRate(newRate) {
    this.setState({
      dayRate: newRate,
    })
  }

  render() {
    const rate= this.state.dayRate/this.state.hours
    return (
      <form className="App">
        <Rate 
          value={this.state.dayRate} 
          label="Day Rate"
          aria-label="day rate"
          min={0}
          max={5000}
          onChange={this.changeRate}
          id="day-rate"
        />
        
        <Rate
          value={this.state.hours}
          onChange={this.changeHours}
          label="Hours"
          aria-label="hours"
          id="hours"
          min={1}
          max={12}
          />
          <Output id="hourly-rate" label="Hourly rate" value={rate.toFixed(2)}  />
      </form>
    );
  }
}

export default App;
