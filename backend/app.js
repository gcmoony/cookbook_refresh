const express = require("express");
const { connect } = require("mongoose");
const RecipeRouter = require("./routes/recipes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// routers
app.use("/recipes", RecipeRouter);

app.listen(PORT, async () => {
  try {
    await connect(process.env.MONGO);
    console.log(`Listening on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
