"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("addresses", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      street: { type: Sequelize.STRING },
      postal_code: { type: Sequelize.STRING },
      city: { type: Sequelize.STRING },
      country: { type: Sequelize.STRING },
      geo_code: { type: Sequelize.JSON },
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
    await queryInterface.dropTable("addresses");
  },
};
