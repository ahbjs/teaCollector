const express = require("express");

const user = require("../api/user.api");
const User = require("../../backend/model/user.model.js")

const router = express.Router();

router.route("/regiter").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const role = req.body.role;
  const password = req.body.password;

  const newAddUser = new User({
    firstName,
    lastName,
    email,
    role,
    password,
  });

  newAddUser
    .save()
    .then(() => {
      res.json("User Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/login", user.login);

module.exports = router;
