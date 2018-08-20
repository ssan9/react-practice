import React from 'react';

export default class Dialog extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillUpdate() {
		console.log('Component is about to update...');
	}
	// change code below this line
	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps);
	}
	componentDidUpdate() {
		console.log('Component re-rendered');
	}
	// change code above this line
  render() {
    return <h1>{this.props.message}</h1>
  }
};