var express = require("express");
var axios = require("axios");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  console.log("test test");
  let articles = await axios.get("http://localhost:3000/api/articles");
  console.log(articles.data.data);
  res.render("index", { articles: articles.data.data });
});

router.get("/blog/:id", async function (req, res, next) {
  let article = await axios.get(
    "http://localhost:3000/api/articles/get/" + req.params.id
  );
  console.log(article.data);
  res.json({ article: article.data });
});

module.exports = router;
