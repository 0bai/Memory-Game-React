import React, {Component} from 'react';

class Card extends Component {
	
	render() {
		const {id, state, color} = this.props;
		let style = {
			minWidth: "100px",
			height: "150px",
			width: "10%",
			backgroundColor: state === 0 ? 'grey' : color,
			borderRadius: "25px",
			border: "6px solid grey",
			margin: "10px",
			display: "inline-block"
		};
		return ( <div key={id} id={id} className='card' style={style} onClick={this.props.onClick}></div> );
	}
}

export default Card;