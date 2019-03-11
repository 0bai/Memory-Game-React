import React, {Component} from 'react';
import Card from './Card';

class GameGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {cards: props.cards, clicked: false};
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	
	handleOnClick(e) {
		let {cards, clicked} = this.state;
		let cardId = e.currentTarget.id;
		let clickedCard = cards.filter(card => Number(card.id) === Number(e.currentTarget.id))[ 0 ];
		console.log('clicked card:');
		console.log(clickedCard);
		let otherSquare = cards.filter(card => Number(card.id) !== Number(cardId) && clickedCard.backgroundColor === card.backgroundColor)[ 0 ];
		console.log('other card');
		console.log(otherSquare);
		if (clicked && clickedCard.cardState === 0 && otherSquare.cardState === 1) {
			cards = cards.map(card => {
				card.cardState = card.backgroundColor === otherSquare.backgroundColor ? card.cardState = 2 : card.cardState;
				console.log('got to update both cards to 2');
				console.log(card.cardState);
				return card;
			});
			console.log(cards);
			this.setState({cards, clicked: false});
		}
		// else if (clickedCard.cardState === 0 && otherSquare.cardState !== 1) {
		// 	console.log('wrong choice got to zero most things');
		// 	console.log(cards);
		// 	cards = cards.map(card => {
		// 		card.cardState = card.cardState === 1 ? card.cardState = 0 : card.cardState;
		// 		return card;
		// 	});
		// }
		else {
			if (clickedCard.cardState === 0) {
				cards = cards.map(card => {
					card.cardState = Number(card.id) === Number(cardId) ? 1 : card.cardState;
					return card;
				});
				console.log('First Click');
				console.log(cards);
				setTimeout(() => {
					console.log('wrong choice got to zero most things');
					console.log(cards);
					cards = cards.map(card => {
						card.cardState = card.cardState === 1 ? card.cardState = 0 : card.cardState;
						return card;
					});
					this.setState({cards, clicked: false});
				}, 3000);
				this.setState({cards, clicked: true});
			}
		}
	}
	
	render() {
		const style = {
			display: 'flex',
			flexWrap: 'wrap',
			margin: '5% 2%',
			
		};
		var grid = this.state.cards.map(card => <Card key={card.id} id={card.id} state={card.cardState}
													  color={card.backgroundColor}
													  onClick={this.handleOnClick}/>);
		return ( <div style={style}>{grid}</div> );
	}
	
}

export default GameGrid;