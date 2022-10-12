const mongoose = require("mongoose");

const teaCollectSchema = mongoose.Schema({
  sellerID: { type: String },
  address: { type: String },
  teaWeight: { type: String },
  wetWeight: { type: String },
  date: { type: String }
});

const teaCollect = mongoose.model("teaCollect", teaCollectSchema);

module.exports = teaCollect;
