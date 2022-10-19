var express = require('express');
var router = express.Router();
const sellerModel = require("../model/teaCollection");
const fs = require("fs");

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

router.get('/driverReport', async (req, res) => {
    var html_to_pdf = require('html-pdf-node');

    let options = { format: 'A4' };
    let dataTR = "";
    let counts = {UTruck:0,road:0,total:0};
    sellerModel.find({}, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            data.map(collector => {
                dataTR += `
                <tr>
                    <td>`+collector.sellerID+`</td>
                    <td>`+collector.address+`</td>
                    <td>`+collector.wholeWeight+`</td>
                    <td>`+collector.wetWeight+`</td>
                    <td>`+collector.collectionDate+`</td>
                </tr>
                `;
                counts.UTruck++;
            })

            let table = `

            <!DOCTYPE html>
            <html>
            <head>
            <style>
            table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
            }
            
            td, th {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 8px;
            }
            
            tr:nth-child(even) {
            background-color: #dddddd;
            }
            body{
                padding: 10px 50px;
            }
            h2{
                background: #049940;
                padding: 10px;
                border-radius: 100px;
            }
            </style>
            </head>
            <body>
            <div style="text-align: center;">
                <img src="https://tea-collector-api.herokuapp.com/download/downloadLogo" alt="logo" width="80" height="80">
                <h3 class="fs-4" style="color: rgb(9, 180, 77); font-weight: bold;padding:0px;margin:0px;">Tea Collector</h3> 
            </div>

            <h3>TeaCollector Collectors Report</h3>
            <p>Total Records : `+counts.UTruck+`</p>
            <table>
            <tr>
                <th>Seller ID</th>
                <th>Address</th>
                <th>WholeWeight</th>
                <th>Wet Weight</th>
                <th>Collection Date</th>
            </tr>
            `+dataTR+`
            </table>
            
            </body>
            </html>
            `;

            let file = { content: table};
            html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
                fs.writeFileSync('./reports/collector/report.pdf', pdfBuffer)
                res.download('./reports/collector/report.pdf');
            });
        }
    });

    
});


module.exports = router;
