const express = require("express");
const router = express.Router();

const fileRouter = require("./file.controller");
const schemeRouter = require("./scheme.controller");
const authRouter = require("./auth.controller");

router.use("/file", fileRouter);
router.use("/scheme", schemeRouter);
router.use("/auth", authRouter);

module.exports = router;
