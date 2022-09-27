const router = require("express").Router();
let teaPrice = require("../models/teaPrice.model");

router.route("/add").post((req, res) => {
  const sellerID = req.body.sellerID;
  const teaWeight = req.body.teaWeight;
  const wetWeight = req.body.wetWeight;
  const price = req.body.price;
  const date = req.body.date;

  const newAddPrice = new teaPrice({
    sellerID,
    teaWeight,
    wetWeight,
    price,
    date,
  });

  newAddPrice
    .save()
    .then(() => {
      res.json("Price Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  teaPrice
    .find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:sellerID").put(async (req, res) => {
  let GNumber = req.params.sellerID;
  const { sellerID, teaWeight, wetWeight, price, date } = req.body;

  const UpdatePrice = {
    sellerID,
    teaWeight,
    wetWeight,
    price,
    date,
  };

  const update = await teaPrice
    .findOneAndUpdate({ sellerID: GNumber }, UpdatePrice)
    .then(() => {
      res.status(200).send({ status: "tea price Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating", error: err.message });
    });
});

router.route("/delete/:sellerID").delete(async (req, res) => {
  let GNumber = req.params.sellerID;

  teaPrice
    .findOneAndDelete({ sellerID: GNumber })
    .then((price) => res.send(price))

    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:sellerID").get(async (req, res) => {
  let GNumber = req.params.sellerID;

  teaPrice
    .find({ sellerID: GNumber })
    .then((price) => res.send(price))

    .catch((err) => {
      console.log(err);
    });
});

module.exports = router
