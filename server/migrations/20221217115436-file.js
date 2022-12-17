"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Files", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      caption: { type: Sequelize.STRING },
      link: { type: Sequelize.STRING, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Files");
  },
};
