import React, {Component} from 'react';

class Card extends Component {
	
	render() {
		const {id, state, color} = this.props;
		let style = {
			width: "130px",
			height: "130px",
			backgroundColor: state === 0 ? 'grey' : color,
			borderRadius: "10px",
			border: "10px solid grey",
			margin: "2px auto"
		};
		return ( <div className='card' style={style}></div> );
	}
}

export default Card;