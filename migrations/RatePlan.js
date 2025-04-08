"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Added FK constraints

    await queryInterface.createTable("rate_plans", {
      id: { type: Sequelize.STRING },
      rate_type: { type: Sequelize.STRING },
      unit: { type: Sequelize.STRING },
      unit_type: { type: Sequelize.STRING },
      value: { type: Sequelize.FLOAT },
      currency: { type: Sequelize.STRING },
      product_id: {
        type: Sequelize.STRING,
        references: { model: "products", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
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
    await queryInterface.dropTable("rate_plans");
  },
};
