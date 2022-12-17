function errorHandler(err, req, res, next) {
  return res
    .status(err.code ?? 500)
    .json({ name: err.name, message: err.message });
}

module.exports = errorHandler;
