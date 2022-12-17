const express = require("express");
const router = express.Router();

const fileRouter = require("./file.controller");
const schemeRouter = require("./scheme.controller");

router.use("/file", fileRouter);
router.use("/scheme", schemeRouter);

module.exports = router;
