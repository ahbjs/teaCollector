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


module.exports = router
