const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  role: { type: String },
  password: { type: String }
});

const user = mongoose.model("user", userSchema);

module.exports = user;
