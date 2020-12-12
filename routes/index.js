var express = require('express');
var router = express.Router();
const mongoose = require("mongoose")
const Movies = require("../models/movies")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movies.find();
    // console.log(movies)
    res.status(200).json(movies);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
