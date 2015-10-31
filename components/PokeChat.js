/*
 *  Module Dependencies
 */

var React = require('react/addons');
var PokeMessage = require('./PokeMessage');

const { CSSTransitionGroup } = React.addons;

export default class PokeChat extends React.Component {

	render() {
		return <ul className="pokechat">
		<CSSTransitionGroup transitionName="message-animation">
			{
				this.props.messages.map((message) => {
					return <PokeMessage key={message.id} message={message}/>
				})
			}
			</CSSTransitionGroup>
		</ul>
	}
}

PokeChat.defaultProps = { messages: [] };