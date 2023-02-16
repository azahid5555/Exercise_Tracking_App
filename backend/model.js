const mongoose = require("mongoose");

const excersiceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  activity: {
    type: String,
  },
  date: {
    type: String,
  },
  duration: {
    type: String,
  },
});
const Excer = mongoose.model("allexcersice", excersiceSchema);
module.exports = Excer;
