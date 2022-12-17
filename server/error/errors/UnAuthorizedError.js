class UnAuthorizedError {
  message;
  name;
  code;

  constructor(message, name) {
    this.name = name;
    this.message = message;
    this.code = 401;
  }
}

module.exports = { UnAuthorizedError };
