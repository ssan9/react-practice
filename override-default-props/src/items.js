import React from 'react';

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
	quantity: 0
}

export default Items;
