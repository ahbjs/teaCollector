const router = require("express").Router();
let lorry = require("../models/lorry.model");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const vehicle = req.body.vehicle;
  const vehicleNo = req.body.vehicleNo;
  const address = req.body.address;
  const nic = req.body.nic;

  const newAddlorry = new lorry({
    name,
    vehicle,
    vehicleNo,
    address,
    nic,
  });

  newAddlorry
    .save()
    .then(() => {
      res.json("lorry Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  lorry
    .find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/delete/:nic").delete(async (req, res) => {
  let GNumber = req.params.nic;

  lorry
    .findOneAndDelete({ nic: GNumber })
    .then((lorry) => res.send(lorry))

    .catch((err) => {
      console.log(err);
    });
});

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
