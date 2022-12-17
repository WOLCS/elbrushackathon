"use strict";
const bcrypt = require("bcrypt");
const saltRounds = 10;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let plainTextPassword1 = "admin";
    let hash = await bcrypt.hash(plainTextPassword1, saltRounds);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          login: "admin",
          password: hash,
          role: "ROLE_ADMIN",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
