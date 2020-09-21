const mongoose = require("mongoose");
const config = {
  localHost: "mongodb://localhost:27017/nan_blog",
};

mongoose.connect(config.localHost, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("mongodb connected");
});

module.exports = mongoose;
