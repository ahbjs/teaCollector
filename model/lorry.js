const mongoose = require("mongoose");

const lorry = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    VehicleName : {
        type : String,
        required : true
    }, 
    VehicleNumber : {
        type : String,
        required : true
    }, 
    Address : {
        type : String,
        required : true
    }, 
    NIC : {
        type : String,
        required : true
    }            
});

const lorryModel = mongoose.model("lorries",lorry);
module.exports = lorryModel;