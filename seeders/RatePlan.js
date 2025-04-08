"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "rate_plans",
      [
        {
          id: "44e4f3e8-bb63-4b08-af75-809ba052a41f",
          rate_type: "deep",
          unit: "entire",
          unit_type: "happen",
          value: 9.27,
          currency: "reach",
        },
        {
          id: "b8ebabfb-6397-4e82-90da-ed8b7209a77d",
          rate_type: "move",
          unit: "letter",
          unit_type: "reveal",
          value: 35.85,
          currency: "up",
        },
        {
          id: "82cba218-5be4-4b03-811d-5533d451b654",
          rate_type: "notice",
          unit: "turn",
          unit_type: "investment",
          value: 54.81,
          currency: "religious",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("rate_plans", null, JSON.stringify({}));
  },
};
