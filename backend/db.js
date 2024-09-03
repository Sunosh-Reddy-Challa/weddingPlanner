const mongoose = require("mongoose");
const mongoURL = "";

const connectToMongo = () => {
  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Database connection error", error);
    });
};
module.exports = connectToMongo;
