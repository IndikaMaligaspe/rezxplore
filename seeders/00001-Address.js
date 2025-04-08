"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "addresses",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          street: "anything",
          postal_code: "direction",
          city: "why",
          country: "standard",
          geo_code: JSON.stringify({}),
        },
        {
          id: "a4e908e3-032e-4d42-84b7-2c58bc8972b4",
          street: "type",
          postal_code: "evening",
          city: "themselves",
          country: "conference",
          geo_code: JSON.stringify({}),
        },
        {
          id: "3a4e7eb8-99b7-465f-af2e-bb0803587a96",
          street: "wear",
          postal_code: "act",
          city: "else",
          country: "make",
          geo_code: JSON.stringify({}),
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("addresses", null, JSON.stringify({}));
  },
};
