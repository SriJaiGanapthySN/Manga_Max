const router = require("express").Router();
const {
  getAnime,
  getAnimebyId,
  getAnimeByGenre,
  searchAnime,
  deleteAnime,
} = require("../controllers/AnimeController");

router.get("/", getAnime);
router.get("/search", searchAnime);
router.get("/:id", getAnimebyId);
router.get("/genre/:genre", getAnimeByGenre);
// router.delete("/delete", deleteAnime);

module.exports = router;
