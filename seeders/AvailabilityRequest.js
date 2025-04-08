"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "availability_requests",
      [
        {
          id: "821ee58d-b21b-4fd4-af87-4e45c1ee4083",
          location_id: 53,
          category_id: 94,
          product_type_id: 73,
          program_date: JSON.stringify({}),
          product_id: "f7a85b18-19e4-4b9c-a638-add43dc03c64",
          search_keywords: "minute",
          tags: JSON.stringify([]),
        },
        {
          id: "821ee58d-b21b-4fd4-af87-20b8",
          location_id: 97,
          category_id: 82,
          product_type_id: 81,
          program_date: JSON.stringify({}),
          product_id: "5fc50f2e-20b8-4611-86ff-1671d08384e5",
          search_keywords: "well",
          tags: JSON.stringify([]),
        },
        {
          id: "821ee58d-b21b-4fd4-af87-f13ac6426c70",
          location_id: 22,
          category_id: 26,
          product_type_id: 17,
          program_date: JSON.stringify({}),
          product_id: "615c0b54-e91a-4c6a-8aaf-f13ac6426c70",
          search_keywords: "myself",
          tags: JSON.stringify([]),
        },
      ],
      JSON.stringify({})
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "availability_requests",
      null,
      JSON.stringify({})
    );
  },
};
