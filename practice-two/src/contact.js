import React from 'react';

export default function Contact(props) {
	return(
		<div className="contacts">
			<img src={props.photo} />
			{props.name}
			{props.address}
		</div>	
	)
}