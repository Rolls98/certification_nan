const db = require("../../db");

const comments = db.Schema({
  comment: String,
  created: { type: Date, default: Date.now() },
  replies: [{ type: db.Types.ObjectId, ref: "comments" }],
  user_id: { type: db.Types.ObjectId, ref: "users" },
});

module.exports = db.model("comments", comments);
