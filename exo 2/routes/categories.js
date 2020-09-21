const express = require("express");
const path = require("path");
const multer = require("multer");
const cat = require("../controllers/articles/cat");
const Router = express.Router();
const uploadFile = multer({
  dest: "./public/images",
});
/***
 * get all Articles
 */

Router.get("/", cat.all);

Router.post("/add", uploadFile.single("image"), cat.add);
Router.post("/update/:id", uploadFile.single("image"), cat.update);
Router.delete("/delete/:id", cat.delete);

module.exports = Router;
