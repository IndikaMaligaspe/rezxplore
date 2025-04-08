"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "product_availabilities",
      [
        {
          id: Sequelize.literal("UUID()"),
          product_id: "57fb6259-c95f-4487-83d8-8fd64caafbe9",
          date: "2025-01-01",
          timeslot: "10:00 AM",
          capacity: 10,
          booked: 2,
          price: 49.99,
          currency: "USD",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: Sequelize.literal("UUID()"),
          product_id: "40e61021-f305-4bf2-9ac7-c215cdb0af57",
          date: "2025-01-01",
          timeslot: "2:00 PM",
          capacity: 8,
          booked: 8,
          price: 59.99,
          currency: "USD",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: Sequelize.literal("UUID()"),
          product_id: "40e61021-f305-4bf2-9ac7-c215cdb0af57",
          date: "2025-01-01",
          timeslot: "4:00 PM",
          capacity: 15,
          booked: 5,
          price: 39.99,
          currency: "USD",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "product_availabilities",
      null,
      JSON.stringify({})
    );
  },
};
