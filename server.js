const express = require("express");
const app = express();
const path = require("path")
require("dotenv").config({path:path.resolve( '../.env')});
const dbConfig = require("./config/dbConfig")
import { PORT } from './config/utils.js';
import { MONGODB_URI } from './config/utils.js';

app.use(express.json())

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);

const port = PORT || 5000;

__dirname = path.resolve();

app.listen(port, () => {
console.log(`Nodejs server running on port ${port}`); 
})


console.log(MONGODB_URI)