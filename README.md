# Get shortened URL

Express server to get shortened URLs. Run a GET on localhost:3001/?url=<your-url-to-shorten> and receive a unique shortened URL. The domain name will be "fakeurlservi.ce"

NOTE: Requires that you have a local Mongo instance with a database called "urlshorten" on port 27017.

Run with Node 12, npm 6, and yarn 1. Other versions not tested.

Run `yarn install` to install dependencies.

Run `node server.js` to run the server.