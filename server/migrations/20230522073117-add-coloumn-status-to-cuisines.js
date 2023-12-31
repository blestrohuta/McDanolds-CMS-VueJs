"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Cuisines", "status", {
      type: Sequelize.STRING,
      defaultValue: "Active",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Cuisines", "status", {});
  },
};
