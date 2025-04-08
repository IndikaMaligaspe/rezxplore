"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: Sequelize.literal("UUID()"),
          name: "Test Admin",
          email: "admin@example.com",
          api_key:
            "0d7569918a3c63ac643fc8cbe8dffc97368325556951baf6b73412289d0af842",
          role_id: null, // Update with actual Role ID if needed
        },
      ],
      JSON.stringify({})
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, JSON.stringify({}));
  },
};
