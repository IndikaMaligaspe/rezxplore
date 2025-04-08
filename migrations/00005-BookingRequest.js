"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("booking_requests", {
      id: { type: Sequelize.STRING, primaryKey: true },
      product_id: { type: Sequelize.STRING },
      date: { type: Sequelize.STRING },
      timeslot: { type: Sequelize.STRING },
      guests: { type: Sequelize.INTEGER },
      customer_info: { type: Sequelize.JSON },
      user_id: { type: Sequelize.UUID, allowNull: false },
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
    await queryInterface.dropTable("booking_requests");
  },
};
