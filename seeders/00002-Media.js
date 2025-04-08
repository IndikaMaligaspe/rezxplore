"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "medias",
      [
        {
          id: "e30cb0db-5dab-4ec4-9b48-020b88968210",
          url: "simply",
          caption: "suggest",
          type: "morning",
          featured: true,
          product_id: "57fb6259-c95f-4487-83d8-8fd64caafbe9",
        },
        {
          id: "b92e6d82-3f9a-429b-bfe0-eab56d89fc98",
          url: "particular",
          caption: "cause",
          type: "staff",
          featured: false,
          product_id: "57fb6259-c95f-4487-83d8-8fd64caafbe9",
        },
        {
          id: "6ffbcbd6-a39d-44ae-9e9d-28718b290c9c",
          url: "line",
          caption: "industry",
          type: "assume",
          featured: true,
          product_id: "e3485c16-ff1e-4004-b0cf-1b481a01dd47",
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("medias", null, JSON.stringify({}));
  },
};
