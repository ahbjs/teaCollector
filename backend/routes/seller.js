var express = require('express');
var router = express.Router();
const sellerModel = require("../model/seller");

router.post('/addSeller', async (req, res) => {
    console.log(req.body);
    var seller = req.body;

    const sellerData = new sellerModel({
        sellerID : seller.sellerID,
        address : seller.address,
        wholeWeight : seller.wholeWeight,
        wetWeight : seller.wetWeight,
        collectionDate : seller.collectionDate
    });

    sellerData.save();
    res.json({result:1});
});

router.post('/getSellers', async (req, res) => {
    sellerModel.find({}, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            res.json(data);
        }
    });
});

module.exports = router;
