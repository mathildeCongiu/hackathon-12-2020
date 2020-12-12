const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  color: String,
  director_name: String,
  num_critic_for_reviews: String,
  duration: String,
  director_facebook_likes: String,
  actor_3_facebook_likes: String,
  actor_2_name: String,
  actor_1_facebook_likes: String,
  gross: String,
  genres: String,
  actor_1_name: String,
  movie_title: String,
  num_voted_users: String,
  cast_total_facebook_likes: String,
  actor_3_name: String,
  facenumber_in_poster: String,
  plot_keywords: String,
  movie_imdb_link: String,
  num_user_for_reviews: String,
  language: String,
  country: String,
  content_rating: String,
  budget: String,
  title_year: String,
  actor_2_facebook_likes: String,
  imdb_score: String,
  aspect_ratio: String,
  movie_facebook_likes: String,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
