import React from 'react';
import Card from './card';
import AddForm from "./add-form";

export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			cards: [
				{
					text: 'Example Card 1'
				},
				{
					text: 'Example Card 2'
				},
				{
					text: 'Example Card 3'
				}
			]
		}
	}

	addCard(text) {
        this.setState({
            cards: [...this.state.cards, {
                text
            }]
        });
    }

	render() {
		const cards = this.state.cards.map((card, index) => (
				<li key={index}>
					<Card {...card} />
				</li>
			))
		return(
				<div className="list">
					<h2>{this.props.title}</h2>
					<ul>{cards}</ul>
					<AddForm 
						type="card" 
						onAdd={text => this.addCard(text)}
/>
				</div>
			)
	}
}