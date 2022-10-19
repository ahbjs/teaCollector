const mongoose = require("mongoose");

const teaPriceSchema = mongoose.Schema({
  sellerID: { type: String },
  teaWeight: { type: String },
  wetWeight: { type: String },
  price: { type: String },
  date: { type: String },
});

const teaPrice = mongoose.model("teaPrice", teaPriceSchema);

module.exports = teaPrice;
