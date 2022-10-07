const router = require("express").Router();
let Comment = require("../models/Comment.model");

router.route("/add").post((req, res) => {
  const phone = req.body.phone;
  const subject = req.body.subject;
  const message = req.body.message;

  const newAddPComment = new Comment({
    phone,
    subject,
    message,
  });

  newAddPComment
    .save()
    .then(() => {
      res.json("Comment Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get").get((req, res) => {
  Comment.find()
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:phone").put(async (req, res) => {
  let GNumber = req.params.phone;
  const { phone, subject, message } = req.body;

  const UpdateComment = {
    phone,
    subject,
    message,
  };

  const update = await Comment.findOneAndUpdate(
    { phone: GNumber },
    UpdateComment
  )
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

router.route("/delete/:phone").delete(async (req, res) => {
  let GNumber = req.params.phone;

  Comment.findOneAndDelete({ phone: GNumber })
    .then((price) => res.send(price))

    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:phone").get(async (req, res) => {
  let GNumber = req.params.phone;

  Comment.find({ phone: GNumber })
    .then((price) => res.send(price))

    .catch((err) => {
      console.log(err);
    });
});


module.exports = router
