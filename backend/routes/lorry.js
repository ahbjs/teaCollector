var express = require('express');
var router = express.Router();
const lorryModel = require("../model/lorry");


/* GET home page. */
router.get('/getLorry', async (req, res) => {
    
    /*const lorry = new lorryModel({
        Name : "asd",
        Address : "sa",
        NIC : "sad",
        VehicleName : "asd",
        VehicleNumber : "asd"
    });
    lorry.save()*/
    
    lorryModel.find({}, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });

});

module.exports = router;
