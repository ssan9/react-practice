import React from 'react';

export default function SurpriseButton(props) {
	return(
			<div className="surprise-button">
				<button type="button" onClick={props.onClick}>Surprise!</button>
			</div>
		)
}