// AvailabilityRequest model
module.exports = (sequelize, DataTypes) => {
  const AvailabilityRequest = sequelize.define(
    "AvailabilityRequest",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      location_id: { type: DataTypes.INTEGER },
      category_id: { type: DataTypes.INTEGER },
      product_type_id: { type: DataTypes.INTEGER },
      program_date: { type: DataTypes.JSON },
      product_id: { type: DataTypes.STRING },
      search_keywords: { type: DataTypes.STRING },
      tags: { type: DataTypes.JSON },
    },
    {
      underscored: true,
    }
  );
  return AvailabilityRequest;
};
