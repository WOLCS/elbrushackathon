const express = require("express");
const authorize = require("../helpers/authorize");

const router = express.Router();
const schemeNodeService = require("../service/schemeNode.service.js");

function getAll(req, res, next) {
  schemeNodeService
    .getAll()
    .then((schemeNodes) => res.json(schemeNodes))
    .catch((err) => next(err));
}

function getById(req, res, next) {
  const id = parseInt(req.params.id, 10);
  schemeNodeService
    .getById(id)
    .then((schemeNode) => {
      console.log(schemeNode);
      return res.json(schemeNode);
    })
    .catch((err) => next(err));
}

function updateScheme(req, res, next) {
  const id = parseInt(req.params.id, 10);

  const schemeNode = req.body;
  schemeNodeService
    .updateScheme(id, schemeNode)
    .then((schemeNode) => res.json(schemeNode))
    .catch((err) => next(err));
}

function deleteScheme(req, res, next) {
  const id = parseInt(req.params.id, 10);
  schemeNodeService
    .deleteScheme(id)
    .then((schemeNode) => res.json(schemeNode))
    .catch((err) => next(err));
}

router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", authorize("ROLE_ADMIN"), updateScheme);
router.delete("/:id", authorize("ROLE_ADMIN"), deleteScheme);

module.exports = router;
