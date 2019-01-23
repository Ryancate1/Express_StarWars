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

  var ep = req.params.episode_number;
  var movies = moviesJSON.movies;

  if (ep >= 1 && ep <= 6) {

    var movie = movies[req.params.episode_number - 1];
    var title = movie.title;
    var main_characters = movie.main_characters;

    var episode_number = req.params.episode_number;
    res.render('movie_single', {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    });
  } else {
    res.render('notFound', {
      movies: movies,
      title: "This is not the page that you are looking for..."
    });
  }


};

// 404
exports.notFound = function(req, res) {
  var movies = moviesJSON.movies;
  res.render('notFound', {
    movies: movies,
    title: "This is not the page that you are looking for..."
  });
};
