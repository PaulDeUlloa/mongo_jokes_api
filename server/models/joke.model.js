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
      minlength: [10, "Must be at least 10 characters long"],
    },
    punchline: {
      type: String,
      //validations:
      required: [true, "Punchline is Required!"],
      minlength: [3, "Must be at least 3 characters long"],
    },
  },
  { timestamps: true } //* This automatically gives us the createdAt and updatedAt columns!
);

//! Create a model with the schema and (export it).

const Joke = mongoose.model('Joke', JokeSchema);

//! (export it)

module.exports = Joke;