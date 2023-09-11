//! 1. Import the controller
const Joke = require('../models/joke.model');

//! Server Test:
module.exports.apiTest = (req, res) => {
  res.json({ message: "Server is Working!" });
};

//! 2. export all functions with placeholder

module.exports.allJoke = (req, res) => {
  Joke.find()
    .then(jokeList => res.json(jokeList))
    .catch((err) => res.json(err));
}