/*
 *  Module Dependencies
 */

var React = require('react');
var PokeMessage = require('./PokeMessage');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class PokeChat extends React.Component {

	render() {
		return <ul className="pokechat">
		<ReactCSSTransitionGroup transitionName="message-animation" transitionEnterTimeout={5000} transitionLeaveTimeout={300}>
			{
				this.props.messages.map((message) => {
					return <PokeMessage key={message.id} message={message}/>
				})
			}
			</ReactCSSTransitionGroup>
		</ul>
	}
}

PokeChat.defaultProps = { messages: [] };