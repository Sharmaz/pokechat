/*
 *  Module Dependencies
 */

var React = require('react');
var PokeAvatar = require('./PokeAvatar');

export default class PokeRow extends React.Component {
	onClick(ev) {
		//this = window
		//alert(this.props.name)
		this.props.growl.call(null, this.props.name) 
		
	}
	render() {			
		return <li className="pokerow" onClick={this.onClick.bind(this)}>
		<PokeAvatar number={this.props.number}/>
		{this.props.name}
		</li>
	}
}