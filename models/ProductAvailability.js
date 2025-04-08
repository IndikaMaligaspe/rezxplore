// models/ProductAvailability.js

module.exports = (sequelize, DataTypes) => {
  const ProductAvailability = sequelize.define(
    "ProductAvailability",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      product_id: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      timeslot: { type: DataTypes.STRING, allowNull: false },
      capacity: { type: DataTypes.INTEGER, allowNull: false },
      booked: { type: DataTypes.INTEGER, defaultValue: 0 },
      price: { type: DataTypes.FLOAT, allowNull: false },
      currency: { type: DataTypes.STRING, defaultValue: "USD" },
    },
    {
      underscored: true,
    }
  );

  ProductAvailability.associate = (models) => {
    ProductAvailability.belongsTo(models.Product, {
      foreignKey: "product_id",
      targetKey: "id",
    });
  };

  return ProductAvailability;
};
