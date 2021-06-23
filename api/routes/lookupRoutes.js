module.exports = function (app) {
  var lookup = require("../controllers/searchController");

  app.route("/search").get(lookup.search);
};
