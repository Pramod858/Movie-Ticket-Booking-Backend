import { PORT } from './config/utils.js';
import { MONGODB_URI } from './config/utils.js';
const express = require("express");
const app = express();
const path = require("path")
const dbConfig = require("./config/dbConfig")

app.use(express.json())

const usersRoute = require("./routes/usersRoute");
const moviesRoute = require("./routes/moviesRoute");
const theaterRoute = require("./routes/theatersRoute");
const bookingsRoute = require("./routes/bookingsRoute")

app.use("/api/users", usersRoute);
app.use("/api/movies", moviesRoute);
app.use("/api/theaters", theaterRoute);
app.use("/api/bookings",bookingsRoute);

const port = PORT || 5000;

__dirname = path.resolve();

app.listen(port, () => {
console.log(`Nodejs server running on port ${port}`); 
})


console.log(MONGODB_URI)