const { validationResult } = require("express-validator");
const articleModel = require("../../models/articles/article");
const commentModel = require("../../models/articles/comments");

exports.all = async (req, res) => {
  articleModel
    .find()
    .populate("cat", "name")
    .exec((err, articles) => {
      if (err) return res.json({ status: "failed", err: err });
      res.json({ status: "success", data: articles });
    });
};

exports.get = async (req, res) => {
  let id = req.params.id;
  let arts = articleModel
    .findOne({ _id: id })
    .populate("cat")
    .populate("comments")
    .exec((err, art) => {
      if (err) return res.status(404).json({ status: "failed", info: err });
      if (art) {
        res.json({ status: "success", data: art });
      } else {
        res.status(403).json({ status: "failed", info: "article not find" });
      }
    });
};

exports.add = (req, res) => {
  console.log(req.file);
  let article = new articleModel({ ...req.body, image: req.file.filename });
  article
    .save()
    .then((r) => {
      res.json({ succes: true, data: r });
    })
    .catch((err) => {
      res.status(403).send({ erreur: err });
    });
};

exports.update = async (req, res) => {
  let id = req.params.id;
  let article = await articleModel.findOne({ _id: id });
  if (article) {
    let ok = await articleModel.updateOne(
      { _id: id },
      { ...req.body, img: req.file ? req.file.filename : article.img }
    );
    if (ok) {
      res.json({ status: "success", data: ok });
    }
  } else {
    res
      .status(403)
      .json({ status: "failed", erreur: "l'article n'existe pas" });
  }
};

exports.delete = async (req, res) => {
  let id = req.params.id;
  let article = await articleModel.findOne({ _id: id });
  if (article) {
    let ok = await articleModel.deleteOne({ _id: id });
    if (ok) {
      res.json({ status: "success", data: id });
    }
  } else {
    res.json({ status: "failed", info: "article not find" });
  }
};

exports.comment = async (req, res) => {
  let id = req.params.id;
  let art = await articleModel.findOne({ _id: id });
  if (art) {
    let comment = new commentModel({ ...req.body });
    comment
      .save()
      .then(async (r) => {
        await art.updateOne({ comments: [...art.comments, r._id] });
        res.json({ status: "success", data: r });
      })
      .catch((err) => {
        console.log("err to save ", err);
        res.json({ status: "failed", err: err });
      });
  } else {
    res.status(404).json({ status: "failed", info: "article not find" });
  }
};

exports.liked = async (req, res) => {
  let id = req.params.id;
  let user_id = req.body.user_id;
  let art = await articleModel.findOne({ _id: id });
  if (art) {
    let user_like = art.likes.filter((id) => id == user_id);
    if (user_like) {
      art.likes.splice(art.likes.indexOf(user_like), 1);
    } else {
      art.likes.push(user_id);
    }

    art.updateOne({ likes: [...art.likes, user_id] }, (err, r) => {
      if (err) return res.status(404).json({ status: "failed", err: err });
      res.json({ status: "success", data: r });
    });
  } else {
    res.status(404).json({ status: "failed", info: "article not find" });
  }
};

exports.replies = async (req, res) => {
  let id_comment = req.params.id;
  let comment = await commentModel.findOne({ _id: id_comment });
  if (comment) {
    let n_comment = new commentModel({ ...req.body });
    n_comment.save().then(async (r) => {
      await comment.updateOne({ replies: [...comment.replies, r._id] });
      res.json({ status: "success", data: r });
    });
  } else {
    res.status(404).json({ status: "failed", info: "commentaire not find" });
  }
};
