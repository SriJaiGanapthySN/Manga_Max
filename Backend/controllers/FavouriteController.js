const Favourite = require("../models/FavouriteModel.js");

const addFavourites = async (req, res) => {
  const { animeId } = req.body;

  const userId = req.user._id;

  try {
    const existingFav = await Favourite.findOne({
      user: userId,
      anime: animeId,
    });
    if (existingFav) {
      return res.status(400).json({ message: "Already in favourites" });
    }

    const fav = new Favourite({ user: userId, anime: animeId });

    await fav.save();
    res.status(200).json({ message: "fav added successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "error while adding favourites" });
  }
};

const getFavourites = async (req, res) => {
  const userId = req.user._id;
  try {
    const response = await Favourite.find({ user: userId }).populate("anime");
    res.status(200).json({ data: response, message: "success" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: " error  while fetching favourites" });
  }
};

const deleteFavourites = async (req, res) => {
  const { id } = req.params;
  if (!req.user) {
    return res.status(400).json({ message: "Unauthorized" });
  }
  const userId = req.user._id;
  try {
    const result = await Favourite.findOneAndDelete({
      user: userId,
      anime: id,
    });
    if (!result) {
      return res.status(404).json({ message: "Favourite not found" });
    }
    res.status(200).json({ message: "item deleted successfully" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: " error  while deleting favourites" });
  }
};

module.exports = {
  getFavourites,
  addFavourites,
  deleteFavourites,
};
