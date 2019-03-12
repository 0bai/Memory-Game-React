import React, {Component} from 'react';
import Card from './Card';

class GameGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {cards: props.cards, noClick: false};
		this.handleOnClick = this.handleOnClick.bind(this);
	}
	
	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({...nextProps, noClick: false});
	}
	
	handleOnClick(e) {
		const STATE = this.props.STATE;
		let {cards, noClick} = this.state;
		
		if (!noClick) {
			
			let cardId = e.currentTarget.id;
			let clickedCard = cards.filter(card => Number(card.id) === Number(e.currentTarget.id))[ 0 ];
			let otherSquare = cards.filter(card => Number(card.id) !== Number(cardId) && clickedCard.backgroundColor === card.backgroundColor)[ 0 ];
			
			// if the  cards match
			if (clickedCard.cardState === STATE.HIDING && otherSquare.cardState === STATE.SHOWING) {
				cards = cards.map(card => ( {
					...card,
					cardState: card.backgroundColor === otherSquare.backgroundColor ? STATE.MATCHING : card.cardState
				} ));
				
				//if the cards don't match just show the clicked card
			} else if (clickedCard.cardState !== STATE.MATCHING) {
				cards = cards.map(card => ( {
					...card,
					cardState: ( Number(card.id) !== Number(cardId) ) ? card.cardState : ( ( card.cardState === STATE.SHOWING ) ? STATE.HIDING : STATE.SHOWING )
				} ));
				//if the number of showing cards are two disable click
				noClick = cards.filter(card => card.cardState === STATE.SHOWING).length === 2;
			}
			//if the clicks will be disabled hide not matching cards in 1.3 seconds
			if (noClick) {
				setTimeout(() => {
					cards = cards.map(card => ( {
						...card,
						cardState: card.cardState === STATE.SHOWING ? STATE.HIDING : card.cardState
					} ));
					this.setState({cards, noClick: false});
				}, 1300);
			}
			//update the current state
			this.setState({noClick, cards});
		}
	}
	
	
	render() {
		var grid = this.state.cards.map(card => <Card key={card.id}
													  id={card.id} state={card.cardState}
													  color={card.backgroundColor}
													  onClick={this.handleOnClick}/>);
		return ( <div>{grid}</div> );
	}
	
}

export default GameGrid;