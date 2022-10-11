var express = require('express');
var router = express.Router();
const lorryRoadModel = require("../model/lorryRoad");
const fs = require("fs");

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

router.post('/getRoadbyId', async (req, res) => {
    var id = req.body.obID;
    lorryRoadModel.findById(id, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    });
});

router.post('/deleteRoadbyId', async (req, res) => {
    var id = req.body.obID;
    lorryRoadModel.findById(id, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json(data);
        }
    }).deleteOne();
});

router.post('/updateRoadbyId', async (req, res) => {
    var id = req.body.obID;
    var road = req.body;
    const lorryRoad = {
        lorryID:road.lorryID,
        roadName:road.roadName,
        date:road.date
    };
    lorryRoadModel.findById(id).updateOne(lorryRoad,async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            console.log(data);
            res.json({result:1});
        }
    });
});

router.get('/getRoadReport', async (req, res) => {
    var html_to_pdf = require('html-pdf-node');

    let options = { format: 'A4' };
    let dataTR = "";
    let counts = {UTruck:0,road:0,total:0};
    lorryRoadModel.find({}, async function (err, data) {
        if (err){
            console.log(err);
        }
        else{
            data.map(road => {
                dataTR += `
                <tr>
                    <td>`+road.lorryID+`</td>
                    <td>`+road.roadName+`</td>
                    <td>`+road.date+`</td>
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
                <img src="http://localhost:8000/download/downloadLogo" alt="logo" width="80" height="80">
                <h3 class="fs-4" style="color: rgb(9, 180, 77); font-weight: bold;padding:0px;margin:0px;">Tea Collector</h3> 
            </div>

            <h3>TeaCollector Road Report</h3>
            <p>Total Records : `+counts.UTruck+`</p>
            <table>
            <tr>
                <th>Truck ID</th>
                <th>Assign Road</th>
                <th>Date</th>
            </tr>
            `+dataTR+`
            </table>
            
            </body>
            </html>
            `;

            let file = { content: table};
            html_to_pdf.generatePdf(file, options).then(pdfBuffer => {
                fs.writeFileSync('./reports/road/report.pdf', pdfBuffer)
                //res.download('./reports/road/report.pdf');
                res.json({"ahb":"ahb"});
            });
        }
    });

    
});

async function myFunction() {
    lorryRoadModel.distinct("lorryID"),async function (err, data) {
        console.log(data);
        return data.length;
    }
}

module.exports = router;
