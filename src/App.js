import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import './App.css';
import GameGrid from './GameGrid';

const Nav = ({onNewGame}) => (
	<div className={'nav'}>
		<div className={'newGame'} onClick={onNewGame}>New Game</div>
	</div>
);
const CardState = {'HIDING': 0, 'SHOWING': 1, 'MATCHING': 2};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {cards: this.getCards()};
		this.handleNewGame = this.handleNewGame.bind(this);
	}
	
	getCards() {
		let cards = [
			{id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
			{id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
			{id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
			{id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
			{id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
			{id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
			{id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
			{id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
			{id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
			{id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
			{id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
			{id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
			{id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
			{id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
			{id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
			{id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
		];
		return cards = shuffle(cards);
	}
	
	handleNewGame() {
		this.setState({cards: this.getCards()});
	}
	
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Nav onNewGame={this.handleNewGame}/>
				</header>
				<GameGrid cards={this.state.cards}/>
			</div>
		);
	}
}

export default App;
