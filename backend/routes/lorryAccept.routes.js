const router = require("express").Router();
let lorryAccept = require("../models/lorryAccept.model");

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
