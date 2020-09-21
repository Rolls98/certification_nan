const userModel = require("../../models/users");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  let infos = { ...req.body };
  console.log(infos);
  infos.password = bcrypt.hashSync(infos.password, 10);
  let admin = await userModel.findOne({ role: "admin" });
  if (admin) {
    let sameUserName = await userModel.findOne({ username: infos.username });
    if (sameUserName) {
      res.json({ status: "failed", info: "username exist" });
    } else {
      let user = new userModel({ ...infos, role: "user" });
      user
        .save()
        .then((r) => {
          res.json({ status: "success", data: r });
        })
        .catch((err) => {
          console.log("erreur...", err);
        });
    }
  } else {
    let admin = new userModel({ ...infos, role: "admin" });

    admin
      .save()
      .then((r) => {
        res.json({ status: "success", data: r });
      })
      .catch((err) => {
        console.log("erreur...", err);
      });
  }
};
