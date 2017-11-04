// server.js
var express = require('express')
var path = require('path')
var compression = require('compression')

var app = express()
app.use(compression())
// serve our static stuff like index.css
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})
var;ssd



// socket.io
var http = require('http').Server(app);
var io = require('socket.io')(http)
io.on('connection', () => {
  console.log('a user connnected')
})


var PORT = process.env.PORT || 8080
http.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT)
})
