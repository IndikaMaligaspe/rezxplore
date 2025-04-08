"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          id: "adf3545d-eb34-47a4-8bf7-465ab71510cb",
          title: "say",
          comment: "family",
          rating: 37.68,
          language: "character",
          date: "nature",
        },
        {
          id: "0f1ee847-b81f-4a51-b25f-5cdef7c8885c",
          title: "opportunity",
          comment: "drug",
          rating: 20.32,
          language: "save",
          date: "police",
        },
        {
          id: "c3d7c890-7997-477a-beca-edd4b9cbc990",
          title: "start",
          comment: "wonder",
          rating: 94.61,
          language: "ok",
          date: "name",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, JSON.stringify({}));
  },
};
