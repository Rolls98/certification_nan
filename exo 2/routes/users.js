var express = require("express");
const usrCtr = require("../controllers/users");
var router = express.Router();

/* GET users listing. */
router.post("/register", usrCtr.register);

module.exports = router;
