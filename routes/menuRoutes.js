const express = require("express");
const router = express.Router();
const { restaurants, generateMenu } = require("../data/restaurantData");

router.get("/", (req, res) => {
  const randomRestaurant =
    restaurants[Math.floor(Math.random() * restaurants.length)];
  const randomMenuItem = generateMenu(randomRestaurant.cuisine)[0];
  res.render("index", { restaurants, randomMenuItem });
});

router.get("/menu/:restaurant", (req, res) => {
  const restaurantName = req.params.restaurant;
  const restaurant = restaurants.find((r) => r.name === restaurantName);

  if (restaurant) {
    const menu = generateMenu(restaurant.cuisine);
    res.render("menu", { restaurant, menu });
  } else {
    res.status(404).send("Restaurant not found");
  }
});

router.get("/alerts", (req, res) => {
  const alerts = restaurants.map((restaurant) => {
    const menu = generateMenu(restaurant.cuisine);
    const specialItems = menu.filter((item) => item.isSpecial);
    return {
      name: restaurant.name,
      specials: specialItems.length ? specialItems : "No current alerts",
    };
  });
  res.render("alerts", { alerts });
});

module.exports = router;
