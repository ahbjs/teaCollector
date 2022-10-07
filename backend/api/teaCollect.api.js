const teaCollect = require("../models/teaCollect.model");

const addTeaCollect = async (req, res) => {
  const sellerID = req.body.firstName;
  const address = req.body.lastName;
  const teaWeight = req.body.email;
  const wetWeight = req.body.role;
  const date = req.body.password;

  const newteaCollect = new teaCollect({
    sellerID,
    address,
    teaWeight,
    wetWeight,
    date
  });

  newteaCollect
    .save()
    .then(() => {
      res.json("tea Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTeaCollect = async (req, res) => {
  teaCollect.find()
    .then((tea) => {
      res.json(tea);
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = {
  addTeaCollect,
  getTeaCollect,
};
