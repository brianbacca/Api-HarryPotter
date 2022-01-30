const express = require("express");
const router = express.Router();

const { all, single, create } = require("../controllers/houses.controller");

/* GET home page. */
router.get("/", all);
router.get("/:id", single);
router.post("/", create);

module.exports = router;
