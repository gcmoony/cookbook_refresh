const express = require("express");
const { getAllRecipes } = require("../controllers/recipes");

const RecipeRouter = express.Router();

RecipeRouter.route("/").get(getAllRecipes);

module.exports = RecipeRouter;
