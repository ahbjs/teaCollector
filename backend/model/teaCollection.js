const mongoose = require("mongoose");

const seller = new mongoose.Schema({
    sellerID : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    }, 
    wholeWeight : {
        type : Number,
        required : true
    }, 
    wetWeight : {
        type : Number,
        required : true
    }, 
    collectionDate : {
        type : String,
        required : true
    }            
});

const sellerModel = mongoose.model("teaCollection",seller);
module.exports = sellerModel;