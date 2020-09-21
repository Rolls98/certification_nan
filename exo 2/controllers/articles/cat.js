const { validationResult } = require("express-validator");
const catModel = require("../../models/articles/categories");

exports.all = async (req, res) => {
  let categories = await catModel.find();
  res.json({ status: "success", data: categories });
};

exports.add = (req, res) => {
  let cat = new catModel({ ...req.body });
  cat
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
  let cat = await catModel.findOne({ _id: id });
  if (cat) {
    let ok = await catModel.updateOne({ _id: id }, { ...req.body });
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
  let categorie = await catModel.findOne({ _id: id });
  if (categorie) {
    let ok = await catModel.deleteOne({ _id: id });
    if (ok) {
      res.json({ status: "success", data: id });
    }
  } else {
    res.json({ status: "failed", info: "categorie not find" });
  }
};

exports.comment = (req, res) => {};
