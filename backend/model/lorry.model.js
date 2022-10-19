const mongoose = require("mongoose");

const lorrySchema = mongoose.Schema({
  name: { type: String },
  vehicle: { type: String },
  vehicleNo: { type: String },
  address: { type: String },
  nic: { type: String },
});

const lorry = mongoose.model("lorry", lorrySchema);

module.exports = lorry;
