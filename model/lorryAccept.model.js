const mongoose = require("mongoose");

const lorryAcceptSchema = mongoose.Schema({
  name: { type: String },
  vehicle: { type: String },
  vehicleNo: { type: String },
  address: { type: String },
  nic: { type: String },
});

const lorryAccept = mongoose.model("lorryAccept", lorryAcceptSchema);

module.exports = lorryAccept;
