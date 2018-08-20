import React from 'react';

export default class Child extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// change code below this line
		if (this.props.display) {
			return <h1>Display!</h1>
		} else {
			return null;
		}
	}
}