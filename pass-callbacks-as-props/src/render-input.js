import React from 'react';

export default class RenderInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
};