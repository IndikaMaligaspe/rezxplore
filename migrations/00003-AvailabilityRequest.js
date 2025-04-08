"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("availability_requests", {
      id: { type: Sequelize.STRING, primaryKey: true },
      location_id: { type: Sequelize.INTEGER },
      category_id: { type: Sequelize.INTEGER },
      product_type_id: { type: Sequelize.INTEGER },
      program_date: { type: Sequelize.JSON },
      product_id: { type: Sequelize.STRING },
      search_keywords: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("availability_requests");
  },
};
