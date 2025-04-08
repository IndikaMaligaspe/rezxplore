// RatePlan model
module.exports = (sequelize, DataTypes) => {
  const RatePlan = sequelize.define(
    "RatePlan",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      // rateplan_id: { type: DataTypes.STRING, primaryKey: true },
      rate_type: { type: DataTypes.STRING },
      unit: { type: DataTypes.STRING },
      unit_type: { type: DataTypes.STRING },
      value: { type: DataTypes.FLOAT },
      currency: { type: DataTypes.STRING },
    },
    {
      underscored: true,
    }
  );
  RatePlan.associate = (models) => {
    RatePlan.belongsTo(models.Product, {
      foreignKey: "product_id",
      sourceKey: "product_id",
    });
  };

  return RatePlan;
};
