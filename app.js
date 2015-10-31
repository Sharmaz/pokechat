/*
 *  Module Dependencies
 */

var React = require('react');
var ReactDOM = require('react-dom');
var PokeApp = require('./components/PokeApp');

ReactDOM.render(
	<PokeApp/>, 
	document.getElementById('container')
);