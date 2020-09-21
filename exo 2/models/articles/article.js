const db = require("../../db");

const art = db.Schema({
  titre: String,
  image: String,
  created: { type: Date, default: Date.now() },
  context: String,
  cat: { type: db.Types.ObjectId, ref: "categories" },
  tags: [{ type: db.Types.ObjectId, ref: "tags" }],
  likes: [{ type: db.Types.ObjectId, ref: "users" }],
  comments: [{ type: db.Types.ObjectId, ref: "comments" }],
});

module.exports = db.model("articles", art);
