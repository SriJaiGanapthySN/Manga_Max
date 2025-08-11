const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  mal_id: { type: Number, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  title_english: { type: String },
  title_japanese: { type: String },
  title_synonyms: { type: [String], default: [] },

  image_jpg_url: { type: String },
  image_jpg_small_url: { type: String },
  image_jpg_large_url: { type: String },

  trailer_youtube_id: { type: String },
  trailer_url: { type: String },
  trailer_embed_url: { type: String },
  trailer_image_url: { type: String },
  trailer_small_image_url: { type: String },
  trailer_medium_image_url: { type: String },
  trailer_large_image_url: { type: String },
  trailer_maximum_image_url: { type: String },

  type: { type: String },
  source: { type: String },
  episodes: { type: Number },
  status: { type: String },
  airing: { type: Boolean },
  duration: { type: String },
  rating: { type: String },

  score: { type: Number },
  scored_by: { type: Number },
  rank: { type: Number },
  popularity: { type: Number },
  members: { type: Number },
  favorites: { type: Number },

  synopsis: { type: String },
  background: { type: String },
  aired_string: { type: String },
  season: { type: String },
  year: { type: Number },
  broadcast_string: { type: String },

  producers: { type: [String], default: [] },
  licensors: { type: [String], default: [] },
  studios: { type: [String], default: [] },
  genres: { type: [String], default: [] },
  explicit_genres: { type: [String], default: [] },
  themes: { type: [String], default: [] },
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;
