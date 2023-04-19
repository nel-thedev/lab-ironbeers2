var express = require("express");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
var router = express.Router();
const punkAPI = new PunkAPIWrapper();

router.get("/beers", function (req, res, next) {
  punkAPI
    .getBeers()
    .then((beersFromApi) => {
      console.log("Beers from the database: ", beersFromApi);
      res.render("beers.hbs", { beersFromApi });
    })
    .catch((error) => console.log(error));
});

router.get("/random", function (req, res, next) {
  punkAPI
    .getRandom()
    .then((randomBeer) => {
      console.log("Beers from the database: ", randomBeer);
      res.render("random.hbs", { randomBeer });
    })
    .catch((error) => console.log(error));
});

module.exports = router;
