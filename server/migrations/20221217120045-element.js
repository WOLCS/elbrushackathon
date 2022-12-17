"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Elements", {
      elementId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      elementType: { type: Sequelize.STRING, allowNull: false },
      elementText: { type: Sequelize.STRING, allowNull: false },
      elementLink: { type: Sequelize.STRING },
      schemeId: { type: Sequelize.INTEGER },
      schemeNodeId: { type: Sequelize.INTEGER },
      SchemeSchemeId: { type: Sequelize.INTEGER, allowNull: false },
      SchemeNodeSchemeNodeId: { type: Sequelize.INTEGER, allowNull: false },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Elements");
  },
};
