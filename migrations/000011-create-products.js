"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price_from: {
        type: Sequelize.FLOAT,
      },
      activity_id: {
        type: Sequelize.STRING,
        references: {
          model: "activities",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      // media: {
      //   type: Sequelize.JSON,
      //   references: {
      //     model: "Media", // Ensure this is the correct table name
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // },
      address: {
        type: Sequelize.STRING,
        references: {
          model: "addresses", // Ensure this is the correct table name
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      rateplans: {
        type: Sequelize.JSON,
      },
      cancellation_policy_id: {
        type: Sequelize.STRING,
        references: {
          model: "cancellation_policies", // You may want to check pluralization
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      reviews: {
        type: Sequelize.JSON,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeConstraint("media1222", "media1222_ibfk_1");
    await queryInterface.dropTable("products");
  },
};
