/*
 * Module dependencies
 */

var React = require('react');
var ReactDOM = require('react-dom')
var PokeTable = require('./PokeTable');
var PokeChat = require('./PokeChat');
var uid = require('uid');
var $ = require('jquery');
var io = require('socket.io-client');

export default class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], pokemons: [] };
    this.onGrowl = this.onGrowl.bind(this);
    this.user = uid(10);
  }

  componentWillMount() {
    $.get('/pokemons', (pokemons) => {
      this.setState({ pokemons: pokemons });
    });
    this.socket = io('http://localhost:3000');
    this.socket.on('message', (message) => {
      if (message.user !== this.user) {
        this.newMessage(message);
      }
    });
  }

  onGrowl(name) {
    let text = `${name}, ${name}!`;
    let message = { id: uid(), text: text, user: this.user };
    this.newMessage(message);
    this.socket.emit('message', message);
  }

  newMessage(message) {
    this.state.messages.push(message);
    let messages = this.state.messages;
    this.setState({ messages: messages });
  }

  render() {
    if (this.state.pokemons.length) {
      return <div className="pokeapp">
        <PokeTable pokemons={this.state.pokemons} onGrowl={ this.onGrowl } />
        <PokeChat messages={this.state.messages} />
      </div>
    } else {
      return <p>Cargando...</p>
    }
  }
}