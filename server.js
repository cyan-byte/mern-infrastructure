require('dotenv').config()
require('./config/database')
const port = process.env.PORT || 3001;
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Routes


// Catch-All Route (catches anything that comes after the slash; it serves the index.html when user types a path into address bar and presses enter, the user refreshes the browser or an external link in an email included on another webpage ) (catches anything that is not included in the routes, so it will send user to index.html [could include an error page])

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

// Where are we?

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });