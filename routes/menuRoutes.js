const express = require("express");
const router = express.Router();
const { restaurants, generateMenu } = require("../data/restaurantData");

router.get("/", (req, res) => {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  const randomMenuItem = generateMenu(randomRestaurant.cuisine)[0];
  res.render("index", { restaurants, randomMenuItem });
});

module.exports = router;
