var express = require('express');
var router = express.Router();
const lorryRoadModel = require("../model/lorryRoad");

router.post('/addRoad', async (req, res) => {
    console.log(req.body);
    var road = req.body;
    const lorryRoad = new lorryRoadModel({
        lorryID:road.lorryID,
        roadName:road.roadName,
        date:road.date
    });
    lorryRoad.save();
    res.json({result:1});
});

router.post('/getRoads', async (req, res) => {
    lorryRoadModel.find({}, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
});

module.exports = router;
