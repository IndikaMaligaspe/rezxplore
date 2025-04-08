module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      price_from: { type: DataTypes.FLOAT },
      activity_id: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      rateplans: { type: DataTypes.JSON },
      cancellation_policy_id: { type: DataTypes.STRING },
    },
    {
      underscored: true,
      tableName: "products",
    }
  );

  Product.associate = (models) => {
    Product.hasMany(models.Media, {
      foreignKey: "product_id",
      as: "medias",
    });

    Product.hasMany(models.Review, {
      foreignKey: "product_id",
      as: "reviews",
    });

    Product.hasMany(models.RatePlan, {
      foreignKey: "product_id",
      targetKey: "product_id",
      as: "ratePlans",
    });

    Product.belongsTo(models.Activity, {
      foreignKey: "activity_id",
      targetKey: "id",
    });

    Product.belongsTo(models.CancellationPolicy, {
      foreignKey: "cancellation_policy_id",
      targetKey: "id",
      as: "cancellationPolicy",
    });

    Product.belongsTo(models.Address, {
      foreignKey: "address",
      targetKey: "id",
      as: "addressInfo",
    });
  };

  return Product;
};
