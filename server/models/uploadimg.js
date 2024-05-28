const mongoose = require('mongoose');

// Define the Notic schema
const newnoticSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

// Create the Notic model
const newNotic = mongoose.model('newNotic', newnoticSchema);

module.exports = newNotic;
