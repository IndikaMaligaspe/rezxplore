"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "booking_responses",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          booking_id: "3953f016-cbc4-4d5c-ae65-9ab032c40d1c",
          status: "position",
          confirmation_code: "find",
        },
        {
          id: "821ee58d-b21b-4fd4-af87-1153ef1cf2eb",
          booking_id: "9519d73b-6dbd-4fa5-8145-6c2a4e887ea4",
          status: "teacher",
          confirmation_code: "and",
        },
        {
          id: "821ee58d-b21b-4fd4-af87-0bb12600f80e",
          booking_id: "7ba35e04-1986-4667-838f-8c2c48765958",
          status: "free",
          confirmation_code: "sing",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "booking_responses",
      null,
      JSON.stringify({})
    );
  },
};
