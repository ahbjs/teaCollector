const express = require("express");

const teaCollect = require("../api/teaCollect.api");

const router = express.Router();

router.post("/add", teaCollect.addTeaCollect);
router.get("/", teaCollect.getTeaCollect);

module.exports = router;
