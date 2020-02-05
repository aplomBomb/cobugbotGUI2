const express = require("express");
const router = express.Router();
const keys = require("../config/keys");

const Insult = require("../models/Insult");

router.post("/fetchInsults", (req, res) => {
   // Get the count of all users
Insult.count().exec(function (err, count) {

    console.log(count)
    return res.status(200).json({count: count})
  })
});

module.exports = router