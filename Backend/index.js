const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/UserRoutes.js");
const cors = require("cors");
const animeRoutes = require("./routes/AnimeRoutes.js");
const favouritesRoutes = require("./routes/FavouriteRoutes.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["https://manga-max-nine.vercel.app"],
    methods: "*",
    allowedHeaders: "*",
  })
);
const db = connectDB();

app.use("/api/auth", userRoutes);
app.use("/api/anime", animeRoutes);
app.use("/api/favourites", favouritesRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  if (db) {
    console.log("Database connection established");
  } else {
    console.error("Failed to connect to the database");
  }
  console.log(`Server is running on port ${PORT}`);
});
