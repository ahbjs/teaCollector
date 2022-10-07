const mongoose = require("mongoose");

const SellingSchema = mongoose.Schema({
  name: { type: String },
  date: { type: String },
  amount: { type: String },
  lorryNumber: { type: String },
});

const Selling = mongoose.model("Selling", SellingSchema);

module.exports = Selling;
