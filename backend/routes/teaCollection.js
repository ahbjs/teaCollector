var express = require('express');
var router = express.Router();
const sellerModel = require("../model/teaCollection");

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

router.post('/getSellerbyId', async (req, res) => {
    var id = req.body.obID;
    sellerModel.findById(id, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    });
});

router.post('/deleteSellerbyId', async (req, res) => {
    var id = req.body.obID;
    sellerModel.findById(id, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    }).deleteOne();
});

router.post('/updateSellerbyId', async (req, res) => {
    var id = req.body.obID;
    var sellerDetails = req.body;
    const seller = {
        sellerID : sellerDetails.sellerID,
        address : sellerDetails.address,
        wholeWeight : sellerDetails.wholeWeight,
        wetWeight : sellerDetails.wetWeight,
        collectionDate : sellerDetails.collectionDate
    };
    sellerModel.findById(id).updateOne(seller,async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json({result:1});
        }
    });
});

module.exports = router;
