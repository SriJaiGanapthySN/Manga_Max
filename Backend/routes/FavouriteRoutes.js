const router = require("express").Router();
const {
  addFavourites,
  getFavourites,
  deleteFavourites,
} = require("../controllers/FavouriteController.js");

const authMiddleWare = require("../middleware/AuthMiddleware.js");

router.use(authMiddleWare);

router.get("/", getFavourites);
router.post("/", addFavourites);
router.delete("/:id", deleteFavourites);

module.exports = router;
