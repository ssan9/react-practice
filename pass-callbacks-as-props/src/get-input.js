import React from 'react';

export default class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input
					value={this.props.input}
					onChange={this.props.handleInput}/>
			</div>
		);
	}
};
