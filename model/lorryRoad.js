const mongoose = require("mongoose");

const lorryRoad = new mongoose.Schema({
    lorryID : {
        type : String,
        required : true
    },
    roadName : {
        type : String,
        required : true
    }, 
    date : {
        type : String,
        required : true
    }            
});

const lorryRoadModel = mongoose.model("lorryRoad",lorryRoad);
module.exports = lorryRoadModel;