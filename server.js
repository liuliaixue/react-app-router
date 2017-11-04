// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression());
// serve our static stuff like index.css
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', () => {
  console.log('a user connnected');
});


const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
  console.log(`Production Express server running at localhost: + ${PORT}`);
});
