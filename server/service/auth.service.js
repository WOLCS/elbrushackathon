require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { User } = require("../models/");
const { UnAuthorizedError } = require("../error/errors/UnAuthorizedError");

const saltRounds = 10;

async function authenticate({ login, password }) {
  const user = await User.findOne({
    where: {
      login,
    },
    raw: true,
  });
  if (!user) throw new UnAuthorizedError("Incorrect login or password");
  const pass = await bcrypt.compare(password, user.password);

  if (user && pass) {
    const token = jwt.sign(
      {
        sub: user.id,
        role: user.role,
        login: user.login,
      },
      process.env.SECRET
    );
    return {
      token,
    };
  }
  throw new UnAuthorizedError("Incorrect login or password");
}

module.exports = {
  authenticate,
};
