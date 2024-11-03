const {
  getRandomCuisine,
  getRandomMenuItem,
  generateMenu,
} = require("../data/restaurantData");

test("Random cuisine is generated from predefined list", () => {
  const cuisine = getRandomCuisine();
  expect(["Italian", "Chinese", "Indian", "American", "French"]).toContain(
    cuisine
  );
});

test("Menu item has valid properties", () => {
  const item = getRandomMenuItem("Italian");
  expect(item).toHaveProperty("name");
  expect(item).toHaveProperty("description");
  expect(item).toHaveProperty("price");
  expect(item).toHaveProperty("isSpecial");
});
