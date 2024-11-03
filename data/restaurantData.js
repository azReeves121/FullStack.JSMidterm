const restaurants = [
  { name: "The Gourmet Bistro", cuisine: "" },
  { name: "Spicy Kitchen", cuisine: "" },
  { name: "Healthy Eats", cuisine: "" },
  { name: "Comfort Diner", cuisine: "" },
  { name: "Sweet Tooth Bakery", cuisine: "" },
];

const cuisines = ["Italian", "Chinese", "Indian", "American", "French"];

// Get a random cuisine
const getRandomCuisine = () =>
  cuisines[Math.floor(Math.random() * cuisines.length)];

// Define menu items for each cuisine
const items = {
  Italian: [
    {
      name: "Lasagna",
      description: "Classic lasagna with cheese",
      price: 12.99,
    },
    {
      name: "Spaghetti Carbonara",
      description: "Spaghetti with creamy sauce and pancetta",
      price: 11.99,
    },
  ],
  Chinese: [
    {
      name: "Kung Pao Chicken",
      description: "Spicy stir-fried chicken with peanuts",
      price: 10.99,
    },
    {
      name: "Spring Rolls",
      description: "Crispy rolls with veggies and chicken",
      price: 6.99,
    },
  ],
  Indian: [
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based chicken curry",
      price: 13.99,
    },
    {
      name: "Chole Bhature",
      description: "Spicy chickpeas with fried bread",
      price: 9.99,
    },
    {
      name: "Paneer Tikka",
      description: "Grilled paneer with spices",
      price: 8.99,
    },
  ],
  American: [
    {
      name: "Cheeseburger",
      description: "Beef patty with cheese and toppings",
      price: 8.99,
    },
    {
      name: "Buffalo Wings",
      description: "Spicy fried chicken wings",
      price: 7.99,
    },
    {
      name: "Caesar Salad",
      description: "Romaine lettuce with Caesar dressing",
      price: 6.99,
    },
  ],
  French: [
    {
      name: "Croque Monsieur",
      description: "Grilled ham and cheese sandwich",
      price: 10.99,
    },
    {
      name: "Ratatouille",
      description: "Stewed veggies in tomato sauce",
      price: 9.99,
    },
    { name: "Soufflé", description: "Fluffy baked egg dish", price: 7.99 },
  ],
};

// Get a random menu item for the given cuisine
const getRandomMenuItem = (cuisine) => {
  const cuisineItems = items[cuisine];
  const randomItem =
    cuisineItems[Math.floor(Math.random() * cuisineItems.length)];
  return { ...randomItem, isSpecial: Math.random() < 0.3 };
};

// Generate a menu with a random number of items for the given cuisine
const generateMenu = (cuisine) => {
  const itemCount = Math.floor(Math.random() * 6) + 5;
  return Array.from({ length: itemCount }, () => getRandomMenuItem(cuisine));
};

module.exports = {
  restaurants,
  getRandomCuisine,
  getRandomMenuItem,
  generateMenu,
};
