module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      category: DataTypes.STRING,
      themes: DataTypes.JSON,
      tags: DataTypes.JSON,
    },
    {
      underscored: true,
    }
  );

  Activity.associate = (models) => {
    Activity.hasMany(models.Product, {
      foreignKey: "activity_id",
      sourceKey: "id",
    });
  };

  return Activity;
};
