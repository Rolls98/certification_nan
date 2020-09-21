const db = require("../../db");

const categories = db.Schema({
  name: String,
  created: { type: Date, default: Date.now() },
});

module.exports = db.model("categories", categories);
