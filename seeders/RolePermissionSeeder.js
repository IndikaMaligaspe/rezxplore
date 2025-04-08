"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Example static entries; replace with actual RoleId and PermissionId from DB if needed
    await queryInterface.bulkInsert(
      "role_permissions",
      [
        {
          role_id: "admin-role-id", // replace after role insert
          permission_id: "can_manage_users-id",
        },
      ],
      JSON.stringify({})
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "role_permissions",
      null,
      JSON.stringify({})
    );
  },
};
