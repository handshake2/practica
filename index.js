//Importamos Express tras instalarlo vía NPM
var express = require('express');
const socketio = require('socket.io');
const http = require('http');
let DiskSerial;
// Definimos App como la función del módulo Express
var App = express();
const server=http.createServer(App);
const io = socketio.listen(server);

io.on('connection',socket =>{
  console.log('new user connected');
});

// Definimos algunas variables que usaremos en las distintas funciones
var port = process.env.PORT || 3000;
var options = {
  root: __dirname
};
// Definimos funciones para luego usarlas al recibir una petición en el router
/*function getHTML(req, res) {
  res.sendFile('./index.html', options, (err) => {
    if (err) throw err;
    console.log('Sirviendo index.html')
   
  })
};*/

App.use(express.static('public'));

// Definimos las rutas
//App.get('/', getHTML);
// Escuchamos el puerto de Express
server.listen(port, function () {
  console.log('Aplicacion escuchando en el puerto: ' + port)
});



