module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "Role",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING },
    },
    {
      underscored: true,
    }
  );

  Role.associate = (models) => {
    Role.hasMany(models.User);
    Role.belongsToMany(models.Permission, {
      through: "RolePermissions",
    });
  };

  return Role;
};
