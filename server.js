
const express = require('express');

const { corsMiddleware, jsonBodyParserMiddleware } = require('./middlewares');
const { ShortenedURL } = require('./data'); // to connect to db 

const PORT = 3001;

const app = express();

app.use([
  corsMiddleware,
  jsonBodyParserMiddleware
]);

const router = express.Router();

router.get('/', (req, res) => {
  console.log(`Received search request. Query: ${JSON.stringify(req.query, null, 2)}`);
  const { url } = req.query; // assume that this is a valid http/https URL
  // TODO: check for URL validity; return a status 400 otherwise
  const [_match, protocol] = url.match(`^(https?)`);

  const shortenedURL = new ShortenedURL({ 
    original: url
  });
  shortenedURL.save((err, document) => {
    if (err) {
      res.status(500).send("Could not create new URL");
    }
    const domainName = 'fakeurlservi.ce';
    /*
      TODO: should generate a globally unique ObjectID that isn't the document id (e.g. randomly generate ObjectIDs until you
      find one that doesn't already match a document). If you know the Mongo ObjectID of one document, you can use it to
      guess the ObjectID of other documents in the database.
    */
    res.send(`${protocol}://${domainName}/${document._id}`); 
  });

});

// apply routers
app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});