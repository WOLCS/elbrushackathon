require("dotenv").config();
const { expressjwt: jwt } = require("express-jwt");
const { UnAuthorizedError } = require("../error/errors/UnAuthorizedError");
const secret = process.env.SECRET;

function authorize(roles = []) {
  if (typeof roles === "string") {
    roles = [roles];
  }
  return [
    // authenticate JWT token and attach user to request object (req.user)
    jwt({ secret, algorithms: ["HS256"] }),

    // authorize based on user role
    (req, res, next) => {
      if (roles.length && !roles.includes(req.auth.role)) {
        // user's role is not authorized
        throw new UnAuthorizedError("Unauthorized");
      }
      // authentication and authorization successful
      next();
    },
  ];
}

module.exports = authorize;
