//! IMport the controller\

const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
  //* Get Requests
  app.get("/api/test",JokeController.apiTest);
          //! Returns a list of all jokes
  app.get("/api/jokes", JokeController.allJoke);
          //! Returns one jokes with a matching :id
  app.get("/api/jokes/:id", JokeController.oneJoke);

  //* Post Requests
  app.post("/api/jokes", JokeController.createJoke);
  //* Put Requests
  app.patch("/api/jokes/:id", JokeController.updateJoke);

  //* Delete Requests

};

//! Import routes to our
