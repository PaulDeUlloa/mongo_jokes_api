// 1. import dependencies
const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// 2. configure express/ connects to database
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require("./config/mongoose.config.js");


// 3. routes
require("./routes/joke.routes")(app);



// 4. listen to Port
app.listen(port, () => console.log(`Server is up on port ${port}`))