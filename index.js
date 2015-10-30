/*
*	Module dependencies
*/

var express = require('express');
var app = express();
var http = require('http');
var engine = require('socket.io');

const port = 3000;

//configurar ruta de archivos estaticos 

app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

var server = http.createServer(app).listen(port, () => {
	console.log(`El servidor esta escuchando en el puerto ${port}`)
})