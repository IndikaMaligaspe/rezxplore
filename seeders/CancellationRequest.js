"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "cancellation_requests",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-1153ef1cf2eb",
          booking_id: "b274a27e-2e18-4002-b06e-987dfc476d44",
          reason: "Mr",
        },
        {
          id: "e9a5579f-0a0b-4434-a4c6-43c504eeec33",
          booking_id: "e9a5579f-0a0b-4434-a4c6-43c504eeec33",
          reason: "already",
        },
        {
          id: "fc7ea7d9-838a-4a2d-b9f7-0bb6ed507089",
          booking_id: "fc7ea7d9-838a-4a2d-b9f7-0bb6ed507089",
          reason: "voice",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "cancellation_requests",
      null,
      JSON.stringify({})
    );
  },
};
