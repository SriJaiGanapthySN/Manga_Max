const mongoose = require("mongoose");

const FavouriteSchema = new mongoose.Schema({
  anime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Anime",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Favourite = mongoose.model("Favourite", FavouriteSchema);

module.exports = Favourite;
