const express = require("express");

const router = express.Router();
const fileService = require("../service/file.service.js");

function getAll(req, res, next) {
  fileService
    .getAll()
    .then((files) => {
      console.log(files);
      return res.json(files);
    })
    .catch((err) => next(err));
}

function getById(req, res, next) {
  const id = parseInt(req.params.id, 10);
  console.log(id);
  fileService
    .getById(id)
    .then((file) => {
      console.log(file);
      return res.json(file);
    })
    .catch((err) => next(err));
}

// function updateScheme(req, res, next) {
//   const id = parseInt(req.params.id, 10);
//   const file = req.body;
//   fileService
//     .updateScheme(id, file)
//     .then((file) => res.json(file))
//     .catch((err) => next(err));
// }

// function deleteScheme(req, res, next) {
//   const id = parseInt(req.params.id, 10);
//   fileService
//     .deleteScheme(id)
//     .then((file) => res.json(file))
//     .catch((err) => next(err));
// }

router.get("/", getAll);
router.get("/:id", getById);
// router.put("/:id", updateScheme);
// router.delete("/:id", deleteScheme);

module.exports = router;
