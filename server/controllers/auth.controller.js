const express = require("express");

const router = express.Router();
const authService = require("../service/auth.service");

function authenticate(req, res, next) {
  console.log(req.body);
  authService
    .authenticate(req.body)
    .then((user) =>
      user
        ? res.json(user)
        : res.status(400).json({ message: "Username or password is incorrect" })
    )
    .catch((err) => next(err));
}

// routes
// public routes
router.post("/authenticate", authenticate);

module.exports = router;
