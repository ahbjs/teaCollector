const router = require("express").Router();
let lorryAccept = require("../model/lorryAccept.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const vehicle = req.body.vehicle;
  const vehicleNo = req.body.vehicleNo;
  const address = req.body.address;
  const nic = req.body.nic;

  const newAddlorryAccept = new lorryAccept({
    name,
    vehicle,
    vehicleNo,
    address,
    nic,
  });

  newAddlorryAccept
    .save()
    .then(() => {
      res.json("lorry Accepted");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  lorryAccept
    .find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/getRoadReport", async (req, res) => {
  var html_to_pdf = require("html-pdf-node");
  var fs = require("fs");

  let options = { format: "A4" };
  let dataTR = "";
  lorryAccept.find({}, async function (err, data) {
    if (err) {
      console.log(err);
    } else {
      data.map((lorry) => {
        dataTR +=
          `
                <tr>
                    <td>` +
          lorry.name +
          `</td>
                    <td>` +
          lorry.vehicleNo +
          `</td>
                    <td>` +
          lorry.vehicle +
          `</td>
          <td>` +
          lorry.address +
          `</td>
                <td>
                ` +
          lorry.nic +
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

            <h3>TeaCollector Accepted lorry report</h3>
            <table>
            <tr>
                <th>Name</th>
                <th>Vehicle Name</th>
                <th>Vehicle Number</th>
                <th>address</th>
                <th>NIC number</th>
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
        fs.writeFileSync("../report.pdf", pdfBuffer);
        res.download("../report.pdf");
      });
    }
  });
});

// router.route("/delete/:sellerID").delete(async (req, res) => {
//   let GNumber = req.params.sellerID;

//   teaPrice
//     .findOneAndDelete({ sellerID: GNumber })
//     .then((price) => res.send(price))

//     .catch((err) => {
//       console.log(err);
//     });
// });

// router.route("/get/:sellerID").get(async (req, res) => {
//   let GNumber = req.params.sellerID;

//   teaPrice
//     .find({ sellerID: GNumber })
//     .then((price) => res.send(price))

//     .catch((err) => {
//       console.log(err);
//     });
// });

module.exports = router;
