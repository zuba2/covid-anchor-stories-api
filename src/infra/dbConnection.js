const mongoose = require("mongoose");

const dbConnection = async () => {
  await mongoose.connect("mongodb://localhost:27017/covid-anchor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = dbConnection;
