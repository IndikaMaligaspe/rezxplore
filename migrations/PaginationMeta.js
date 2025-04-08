"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pagination_metas", {
      page: { type: Sequelize.INTEGER },
      limit: { type: Sequelize.INTEGER },
      total_pages: { type: Sequelize.INTEGER },
      total_records: { type: Sequelize.INTEGER },
      total_activities: { type: Sequelize.INTEGER },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pagination_metas");
  },
};
