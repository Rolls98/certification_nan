const db = require("../../db");

const users = db.Schema({
  username: String,
  email: String,
  password: String,
  created: { type: Date, default: Date.now() },
  role: String,
});

module.exports = db.model("users", users);
