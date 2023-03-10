const express = require("express");
const authorize = require("../helpers/authorize");

const router = express.Router();
const schemeService = require("../service/scheme.service.js");

function getAll(req, res, next) {
  const isShort = req.query.short;
  schemeService
    .getAll(isShort)
    .then((schemes) => res.json(schemes))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  const id = parseInt(req.params.id, 10);
  schemeService
    .getById(id)
    .then((scheme) => {
      console.log(scheme);
      return res.json(scheme);
    })
    .catch((err) => next(err));
}

function updateScheme(req, res, next) {
  const id = parseInt(req.params.id, 10);

  const scheme = req.body;
  schemeService
    .updateScheme(id, scheme)
    .then((scheme) => res.json(scheme))
    .catch((err) => next(err));
}

function deleteScheme(req, res, next) {
  const id = parseInt(req.params.id, 10);
  schemeService
    .deleteScheme(id)
    .then((scheme) => res.json(scheme))
    .catch((err) => next(err));
}

router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", authorize("ROLE_ADMIN"), updateScheme);
router.delete("/:id", authorize("ROLE_ADMIN"), deleteScheme);

module.exports = router;
