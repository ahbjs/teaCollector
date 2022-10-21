const router = require("express").Router();
let Selling = require("../models/Selling.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const amount = req.body.amount;
  const lorryNumber = req.body.lorryNumber;

  const newAddPSelling = new Selling({
    name,
    date,
    amount,
    lorryNumber,
  });

  newAddPSelling
    .save()
    .then(() => {
      res.json("Selling Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  Selling.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:lorryNumber").delete(async (req, res) => {
  let GNumber = req.params.lorryNumber;

  Selling.findOneAndDelete({ lorryNumber: GNumber })
    .then((price) => res.send(price))

    .catch((err) => {
      console.log(err);
    });
});


router.get("/getRoadReport", async (req, res) => {
  var html_to_pdf = require("html-pdf-node");
  var fs = require("fs");

  let options = { format: "A4" };
  let dataTR = "";
  Selling.find({}, async function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data.map((sell) => {
        dataTR +=
          `
                <tr>
                    <td>` +
          sell.name +
          `</td>
                    <td>` +
          sell.date +
          `</td>
                    <td>` +
          sell.amount +
          `</td>
                <td>
                ` +
          sell.lorryNumber +
          `</td>
                </tr>
                `;
      });

      let table =
        `

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

            <h3>TeaCollector Sales Report</h3>
            <table>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Ammount</th>
                <th>Lorry Number</th>
            </tr>
            ` +
        dataTR +
        `
            </table>
            
            </body>
            </html>
            `;

      let file = { content: table };
      html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
        fs.writeFileSync("./reports/seller/report.pdf", pdfBuffer);
        res.download("./reports/seller/report.pdf");
      });
    }
  });
});


module.exports = router
