import React, {Component} from 'react';
import Card from './Card';

class GameGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {cards: props.cards};
	}
	
	render() {
		const style = {
			display: 'flex',
			flexWrap: 'wrap',
			margin: '5% 2%',
			
		};
		var grid = this.state.cards.map(card => <Card id={card.id} state={card.cardState} color={card.color}/>);
		return ( <div style={style}>{grid}</div> );
	}
	
}

export default GameGrid;