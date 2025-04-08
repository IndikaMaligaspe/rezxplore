"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "booking_requests",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          product_id: "cbdf261b-4d3a-421f-8fd6-9b201db74e5f",
          user_id: "cbdf261b-4d3a-421f-8fd6-9b201db74e5f",
          date: "drive",
          timeslot: "pick",
          guests: 25,
          customer_info: JSON.stringify(JSON.stringify({})),
        },
        {
          id: "821ee58d-b21b-4fd4-af87-1153ef1cf2eb",
          product_id: "b20554d0-56b6-4838-ae98-1153ef1cf2eb",
          user_id: "cbdf261b-4d3a-421f-8fd6-9b201db74e5f",
          date: "stuff",
          timeslot: "reason",
          guests: 33,
          customer_info: JSON.stringify(JSON.stringify({})),
        },
        {
          id: "821ee58d-b21b-4fd4-af87-0bb12600f80e",
          product_id: "3f56adc7-9a00-4dcd-8d8c-0bb12600f80e",
          user_id: "cbdf261b-4d3a-421f-8fd6-9b201db74e5f",
          date: "skin",
          timeslot: "field",
          guests: 90,
          customer_info: JSON.stringify(JSON.stringify({})),
        },
      ],
      JSON.stringify(JSON.stringify({}))
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "booking_requests",
      null,
      JSON.stringify(JSON.stringify({}))
    );
  },
};
