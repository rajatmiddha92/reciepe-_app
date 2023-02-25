const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    url: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  ingredients: [{
    type: String,
    required: true
  }],
  directions: {
    type: String,
    required: true
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
