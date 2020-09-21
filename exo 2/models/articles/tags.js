const db = require("../../db");

const tags = db.Schema({
  name: String,
  created: { type: Date, default: Date.now() },
});

module.exports = db.model("tags", tags);
