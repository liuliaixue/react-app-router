// server.js
const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
app.use(compression());
// serve our static stuff like index.css
// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

var PORT = process.env.PORT || 60000
app.listen(PORT, function () {
  console.log(PORT)
  console.log('Production Express server running at localhost:' + PORT)
});
