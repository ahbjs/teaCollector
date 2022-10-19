const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  phone: { type: String },
  subject: { type: String },
  message: { type: String }
});

const Comment = mongoose.model("comment", CommentSchema);

module.exports = Comment;
