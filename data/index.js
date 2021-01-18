const mongoose = require('mongoose');

const ShortenedURLSchema = require('./schemas/ShortenedURL');

const mongoUrl = 'mongodb://localhost:27017/urlshorten';

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose.connect(mongoUrl, mongoOptions)
  .catch(error => console.log(JSON.stringify(error)));

mongoose.connection.on('open', error => {
  console.log(`Connected to ${mongoUrl}`);
});

mongoose.connection.on('error', error => {
  console.log(JSON.stringify(error));
});

/*
  create models
*/

const ShortenedURL = mongoose.model('ShortenedURL', ShortenedURLSchema);

module.exports = {
  ShortenedURL
};
