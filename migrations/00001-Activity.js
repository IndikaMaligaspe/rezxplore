"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("activities", {
      id: { type: Sequelize.STRING, primaryKey: true },
      name: { type: Sequelize.STRING },
      category: { type: Sequelize.STRING },
      themes: { type: Sequelize.JSON },
      tags: { type: Sequelize.JSON },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
        ),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("activities");
  },
};
