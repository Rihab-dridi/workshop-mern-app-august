const mongoose = require("mongoose");
const connectDB = () =>
  mongoose.connect("mongodb+srv://Rihab:dringdridi@clusterapp.9qn5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", () => {
    try {
      console.log("the database is connected..");
    } catch (error) {
      console.log(error);
    }
  });
module.exports = connectDB;
