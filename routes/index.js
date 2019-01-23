var moviesJSON = require('../movies.json');


// Home
exports.home = function(req, res) {

  var movies = moviesJSON.movies;

  res.render('Home', {
    movies : movies
  });
};

// Movie Single
exports.movies_single = function (req, res) {
  var episode_number = req.params.episode_number;
  res.send('This is the page for episode ' + episode_number);
};

// 404
exports.notFound = function(req, res) {
  res.send('This is not the page that you are looking for...');
};
