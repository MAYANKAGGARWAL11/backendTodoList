const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo1");

const userSchema = mongoose.Schema({
  id: String,
  desc: String, 
  completed: Boolean,
});

module.exports = mongoose.model("user", userSchema);