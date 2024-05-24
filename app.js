// 🔖 package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const movieRouter = require("./movie-routes");

// 🔖 declaration
const app = express();
// 🔖 middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
// 🔖 to store your images, video or audio files in back-end and 
//    access it on front-end side.
// NOTE: eg: http://localhost:3434/
app.use(express.static('public'));

// 🔖 routers
// TODO: add your routers below 👇
// eg: 🧑‍💻 ▶️ app.use('/like', movieRouter);
app.use('/movie', movieRouter);

// 🔖 exports
module.exports = app;