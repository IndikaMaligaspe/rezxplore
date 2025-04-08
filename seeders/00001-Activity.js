"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "activities",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          name: "miss",
          category: "record",
          themes: JSON.stringify([]),
          tags: JSON.stringify([]),
        },
        {
          id: "a4e908e3-032e-4d42-84b7-2c58bc8972b4",
          name: "discussion",
          category: "tonight",
          themes: JSON.stringify([]),
          tags: JSON.stringify([]),
        },
        {
          id: "3a4e7eb8-99b7-465f-af2e-bb0803587a96",
          name: "age",
          category: "research",
          themes: JSON.stringify([]),
          tags: JSON.stringify([]),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("activities", null, {});
  },
};
