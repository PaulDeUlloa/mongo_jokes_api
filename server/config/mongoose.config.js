//Mongoose provides more structure to MongoDB by adding schemas that we can create that turn into models for our collections. These models specify keys, types, and even validations for documents in a specific collection. Mongoose also handles appropriate naming for us when it communicates with MongoDB!

//Imports the mongoose library 
const mongoose = require('mongoose');

//extract variables from the .env
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;





const uri = `mongodb+srv://${username}:${pw}@jokes.wsis6no.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log(" ✔✨ Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
