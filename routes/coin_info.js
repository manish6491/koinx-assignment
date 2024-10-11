const express = require("express")

const router = express.Router()
const {standard_deviation, statistics} = require("../controllers/calculations.js")

router.route("/deviation").post(standard_deviation)

router.route("/stats").post(statistics)

module.exports = router