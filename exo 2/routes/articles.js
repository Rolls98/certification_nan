const express = require("express");

const multer = require("multer");
const article = require("../controllers/articles");
const Router = express.Router();
const uploadFile = multer({
  dest: "./public/images",
});
/***
 * get all Articles
 */

Router.get("/", article.all);
Router.get("/get/:id", article.get);

Router.post("/add", uploadFile.single("image"), article.add);
Router.post("/update/:id", uploadFile.single("image"), article.update);
Router.post("/comment/:id", article.comment);
Router.post("/liked/:id", article.liked);
Router.post("/replies/:id", article.replies);

Router.delete("/delete/:id", article.delete);

module.exports = Router;
