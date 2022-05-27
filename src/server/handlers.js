
const mockPrices = require("../mock/services/prices.json");

function handlePriceOffersService (req, res) {
  res.send(mockPrices);
}

module.exports = {
  handlePriceOffersService
};
