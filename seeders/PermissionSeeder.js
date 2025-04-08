"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "permissions",
      [
        { id: Sequelize.literal("UUID()"), name: "can_read_products" },
        { id: Sequelize.literal("UUID()"), name: "can_book" },
        { id: Sequelize.literal("UUID()"), name: "can_cancel" },
        { id: Sequelize.literal("UUID()"), name: "can_manage_users" },
      ],
      JSON.stringify({})
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("permissions", null, JSON.stringify({}));
  },
};
