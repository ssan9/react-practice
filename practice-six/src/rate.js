import React from "react";

export default function Rate(props) { //e.target.value coz there are more than 1 input fields in parent component instead of here
	return(
			<div className="rate">
				<label htmlFor={props.id}>{props.label}</label>
				<input
				type="number"
				aria-label={props.label}
				id={props.id}
				value={props.value}
				onChange={e=>props.onChange(e.target.value)}
				min={props.min}
				max={props.max}
				/>
			</div>	
		)
}


Rate.defaultProps={
	value: 0
}