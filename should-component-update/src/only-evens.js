import React from 'react';

export default class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
   	// change code below this line
		return nextProps.value % 2 === 0;
   	// change code above this line
	}
	componentWillReceiveProps(nextProps) {
		console.log('Receiving new props...');
	}
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}
  render() {
    return <h1>{this.props.value}</h1>
  }
};
