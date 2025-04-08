"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cancellation_policies",
      [
        {
          id: "6aab5a76-95b0-4645-9ae7-d51878603bff",
          policy_type: "nation",
          policy_from: "administration",
          policy_to: "might",
          policy_value: 63.79,
          cancellation_note: "evening",
          cancellation_fee: 59.35,
          cancellation_status: "news",
        },
        {
          id: "22d6367a-10f7-4ce5-b03d-66d76b0ec031",
          policy_type: "be",
          policy_from: "event",
          policy_to: "somebody",
          policy_value: 55.74,
          cancellation_note: "entire",
          cancellation_fee: 80.15,
          cancellation_status: "live",
        },
        {
          id: "16286411-c7bc-42d3-9421-e87b5a5d8ff8",
          policy_type: "last",
          policy_from: "partner",
          policy_to: "activity",
          policy_value: 65.54,
          cancellation_note: "green",
          cancellation_fee: 77.77,
          cancellation_status: "much",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "cancellation_policies",
      null,
      JSON.stringify({})
    );
  },
};
