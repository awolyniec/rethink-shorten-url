const mongoose = require('mongoose');

const shortenedURLSchema = new mongoose.Schema({
  original: {
    type: String,
    required: true
  },
});

module.exports = shortenedURLSchema;
