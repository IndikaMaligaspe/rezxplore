"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: "57fb6259-c95f-4487-83d8-8fd64caafbe9",
          name: "affect",
          description: "her",
          price_from: 71.87,
          activity_id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          address: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          rateplans: JSON.stringify([]),
          cancellation_policy_id: "6aab5a76-95b0-4645-9ae7-d51878603bff",
          reviews: JSON.stringify([]),
        },
        {
          id: "40e61021-f305-4bf2-9ac7-c215cdb0af57",
          name: "maybe",
          description: "true",
          price_from: 68.5,
          activity_id: "a4e908e3-032e-4d42-84b7-2c58bc8972b4",
          address: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          rateplans: JSON.stringify([]),
          cancellation_policy_id: "6aab5a76-95b0-4645-9ae7-d51878603bff",
          reviews: JSON.stringify([]),
        },
        {
          id: "e3485c16-ff1e-4004-b0cf-1b481a01dd47",
          name: "light",
          description: "all",
          price_from: 5.19,
          activity_id: "3a4e7eb8-99b7-465f-af2e-bb0803587a96",
          address: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          rateplans: JSON.stringify([]),
          cancellation_policy_id: "16286411-c7bc-42d3-9421-e87b5a5d8ff8",
          reviews: JSON.stringify([]),
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, JSON.stringify({}));
  },
};
