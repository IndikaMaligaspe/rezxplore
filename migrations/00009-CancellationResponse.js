"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cancellation_responses", {
      id: { type: Sequelize.STRING, primaryKey: true },
      cancellation_id: { type: Sequelize.STRING },
      status: { type: Sequelize.STRING },
      refunded_amount: { type: Sequelize.FLOAT },
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
    await queryInterface.dropTable("cancellation_responses");
  },
};
