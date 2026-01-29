const Recipe = require("../models/Recipes");

const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().sort("publish_date");

  res.status(200).json({ recipes });
};

module.exports = { getAllRecipes };
