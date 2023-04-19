var express = require("express");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
var router = express.Router();
const punkAPI = new PunkAPIWrapper();

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
