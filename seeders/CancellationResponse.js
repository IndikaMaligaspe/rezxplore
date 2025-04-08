"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cancellation_responses",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-1153ef1cf2eb",
          cancellation_id: "e30cb0db-5dab-4ec4-9b48-020b88968210",
          status: "feel",
          refunded_amount: 6.79,
        },
        {
          id: "821ee58d-b92e6d82-4fd4-af87-1153ef1cf2eb",
          cancellation_id: "b92e6d82-3f9a-429b-bfe0-eab56d89fc98",
          status: "value",
          refunded_amount: 40.4,
        },
        {
          id: "821ee58d-b21b-4fd4-a39d-1153ef1cf2eb",
          cancellation_id: "6ffbcbd6-a39d-44ae-9e9d-28718b290c9c",
          status: "ahead",
          refunded_amount: 42.8,
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "cancellation_responses",
      null,
      JSON.stringify({})
    );
  },
};
