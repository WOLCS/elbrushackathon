class NotFoundError {
  message;
  name;
  code;

  constructor(message, name) {
    this.name = name;
    this.message = message;
    this.code = 404;
  }
}

module.exports = { NotFoundError };
