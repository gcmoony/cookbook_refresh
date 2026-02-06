const express = require("express");
const { getAllRecipes, getRecipe } = require("../controllers/recipes");

const RecipeRouter = express.Router();

RecipeRouter.route("/").get(getAllRecipes);
RecipeRouter.route("/:id").get(getRecipe);

module.exports = RecipeRouter;
