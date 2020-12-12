require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const MongoStore = require("connect-mongo")(session);
const cors = require("cors");

const Movie = require('./models/movies')
const data = require('./data.json')

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.error(err));

// Function to create de DB for the first time, no need to uncomment again
// (async () => {
//   try {
//     const movies = await Movie.insertMany(data);
//     movies.forEach((element) => {
//       console.log(element.title);
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// })();

const app = express();

// CORS MIDDLEWARE SETUP
/*
app.use(
  cors({
    credentials: true,
    origin: [
      process.env.PUBLIC_DOMAIN,
      "https://volonthero.herokuapp.com",
      "http://volonthero.herokuapp.com",
    ],
  })
);
*/

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).json({ code: "not found" });
});

// error handler
app.use((err, req, res, next) => {
  // always log the error
  console.error("ERROR", req.method, req.path, err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    const statusError = err.status || "500";
    res.status(statusError).json(err);
  }
});

module.exports = app;
