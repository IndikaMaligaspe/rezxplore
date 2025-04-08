"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cancellation_policies", {
      id: { type: Sequelize.STRING, primaryKey: true },
      policy_type: { type: Sequelize.STRING },
      policy_from: { type: Sequelize.STRING },
      policy_to: { type: Sequelize.STRING },
      policy_value: { type: Sequelize.FLOAT },
      cancellation_note: { type: Sequelize.STRING },
      cancellation_fee: { type: Sequelize.FLOAT },
      cancellation_status: { type: Sequelize.STRING },
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
    await queryInterface.dropTable("cancellation_policies");
  },
};
