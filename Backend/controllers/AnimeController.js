const mongoose = require("mongoose");
const Anime = require("../models/AnimeModel.js");

const getAnime = async (req, res) => {
  try {
    const anime = await Anime.find({ airing: true }).limit(35);
    res.status(200).json({ data: anime, message: "Fetched Sucessfully" });
  } catch (e) {
    res.status(500).json({ message: "Error While Fetching" });
  }
};

const getAnimebyId = async (req, res) => {
  const { id } = req.params;
  try {
    const anime = await Anime.findById(id);
    res.status(200).json({ data: anime, message: "Fetched Sucessfully" });
  } catch (e) {
    res.status(500).json({ message: "Error While Fetching" });
  }
};

const getAnimeByGenre = async (req, res) => {
  const genre = req.params.genre;
  try {
    const anime = await Anime.find({ genres: genre });
    res.status(200).json({ data: anime, message: "Fetched Sucessfully" });
  } catch (e) {
    res.status(500).json({ message: "Error While Fetching" });
  }
};

const searchAnime = async (req, res) => {
  const query = req.query.query;

  try {
    const anime = await Anime.find({
      title: {
        $regex: query,
        $options: "i",
      },
    });
    res.status(200).json({ data: anime, message: "Fetched Sucessfully" });
  } catch (e) {
    res.status(500).json({ message: `Error While Fetching ${e}` });
  }
};

// const deleteAnime = async (req, res) => {
//   try {
//     const anime = await Anime.deleteMany({
//       genres: "Hentai",
//     });
//     res.status(200).json({ message: "Deleted Sucessfully" });
//   } catch (e) {
//     res.status(500).json({ message: `Internal Server Error` });
//   }
// };

module.exports = {
  getAnime,
  getAnimebyId,
  getAnimeByGenre,
  searchAnime,
};
