var express = require('express');
var router = express.Router();
const lorryModel = require("../model/lorry");


/* GET home page. */
router.get('/getLorry', async (req, res) => {
    
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
