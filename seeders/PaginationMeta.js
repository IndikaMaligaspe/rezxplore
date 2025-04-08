"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "pagination_metas",
      [
        {
          page: 28,
          limit: 63,
          total_pages: 59,
          total_records: 13,
          total_activities: 33,
        },
        {
          page: 100,
          limit: 57,
          total_pages: 67,
          total_records: 22,
          total_activities: 69,
        },
        {
          page: 70,
          limit: 20,
          total_pages: 85,
          total_records: 84,
          total_activities: 18,
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "pagination_metas",
      null,
      JSON.stringify({})
    );
  },
};
