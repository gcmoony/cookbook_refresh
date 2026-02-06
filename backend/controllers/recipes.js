const Recipe = require("../models/Recipes");

const getAllRecipes = async (req, res) => {
  const recipes = await Recipe.find().sort("publish_date");
  res.status(200).json({ count: recipes.length, recipes });
};

const getRecipe = async (req, res) => {
  const recipe = await Recipe.find({ _id: req.params.id });
  if (!recipe) {
    return res.status(404).json({ msg: `Can't find that recipe` });
  }
  res.status(200).json({ recipe });
};

module.exports = { getAllRecipes, getRecipe };
