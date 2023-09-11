//! IMport the controller\

const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  //* Get Requests
  app.get("/api/test",JokeController.apiTest);
  //* Post Requests

  //* Put Requests

  //* Delete Requests

};

//! Import routes to our
