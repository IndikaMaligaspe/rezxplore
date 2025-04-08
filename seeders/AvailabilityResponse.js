"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "availability_responses",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          product_id: "3ef59499-8d07-4c6b-82f4-1b26dc7cfd53",
          availability: JSON.stringify([]),
        },
        {
          id: "c8a38c2c-4be4-44eb-b348-090af804fa12",
          product_id: "c8a38c2c-4be4-44eb-b348-090af804fa12",
          availability: JSON.stringify([]),
        },
        {
          id: "724fe0f6-b8ee-4609-a39a-39050f299636",
          product_id: "724fe0f6-b8ee-4609-a39a-39050f299636",
          availability: JSON.stringify([]),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("availability_responses", null, {});
  },
};
