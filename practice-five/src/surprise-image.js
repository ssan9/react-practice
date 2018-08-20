import React from 'react';

export default function SurpriseImage(props) {
	return(
			<div className="surprise-image">
				<img onClick={props.onClick} src ="https://media.giphy.com/media/10dV5LFkPenFxm/giphy.gif" alt="A surprising fig" />
			</div>
		)
}