const express = require('express');
const cors = require('cors');
const { handlePriceOffersService } = require("./handlers");
const { NODE_API_SERVICE_PORT, ALLOWED_ORIGINS } = require("./constants");

const app = express();

app.use(cors({
  origin: ALLOWED_ORIGINS
}));

app.get('/api/price-offer', handlePriceOffersService);

// start server
app.listen(NODE_API_SERVICE_PORT, () => {
  console.log(`Listening on port ${NODE_API_SERVICE_PORT}`)
});
