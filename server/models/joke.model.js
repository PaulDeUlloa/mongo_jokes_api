//* Here we define a DATABASE structure with our models. Like an ERD in mySQL.

//! import Mongoose
const mongoose = require("mongoose");

//! Define our schema with keys + validations

const JokeSchema = new mongoose.Schema(
  {
    joke: {
      type: String,
      //validations:
      required: [true, "Jokes is Required!"],
    },
    punchline: {
      type: String,
      //validations:
      required: [true, "Punchline is Required!"],
    },
  },
  { timestamps: true } //* This automatically gives us the createdAt and updatedAt columns!
);

//! Create a model with the schema and (export it).

const Joke = mongoose.model('Joke', JokeSchema);

//! (export it)

module.exports = Joke;