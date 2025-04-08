// // Activity model
// module.exports = (sequelize, DataTypes) => {
//   const Activity = sequelize.define("Activity", {
//     activity_id: { type: DataTypes.STRING },
//     name: { type: DataTypes.STRING },
//     category: { type: DataTypes.STRING },
//     themes: { type: DataTypes.JSON },
//     tags: { type: DataTypes.JSON },
//   });
//   Activity.associate = (models) => {
//     Activity.hasMany(models.Product);
//   };

//   return Activity;
// };

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
