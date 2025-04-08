"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "roles",
      [
        { id: Sequelize.literal("UUID()"), name: "admin" },
        { id: Sequelize.literal("UUID()"), name: "partner" },
        { id: Sequelize.literal("UUID()"), name: "viewer" },
      ],
      JSON.stringify({})
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null, JSON.stringify({}));
  },
};
