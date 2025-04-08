// AvailabilityResponse model
module.exports = (sequelize, DataTypes) => {
  const AvailabilityResponse = sequelize.define(
    "AvailabilityResponse",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      product_id: { type: DataTypes.STRING },
      availability: { type: DataTypes.JSON },
    },
    {
      underscored: true,
    }
  );
  return AvailabilityResponse;
};
