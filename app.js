// == Declarations ==
var express = require('express');
var app = express();
// == End Declarations ==


// Set View Engine
app.set('view engine', 'ejs');

// Points to Static Files
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


// == Routes ==
var routes = require('./routes');

  // Home
  app.get('/', routes.home);

  // Movie Single
  app.get('/star_wars_episode/:episode_number?', routes.movies_single);

  // 404
  app.get('*', routes.notFound);

// == End Routes ==


// Setting Port to listen on
var PORT = process.env.PORT || 4000;

app.listen(PORT);
