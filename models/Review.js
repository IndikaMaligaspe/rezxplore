// Review model
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: { type: DataTypes.STRING },
      comment: { type: DataTypes.STRING },
      rating: { type: DataTypes.FLOAT },
      language: { type: DataTypes.STRING },
      date: { type: DataTypes.STRING },
    },
    {
      underscored: true,
      tableName: "reviews",
    }
  );
  Review.associate = (models) => {
    Review.belongsTo(models.Product, {
      foreignKey: "product_id",
      sourceKey: "product_id",
    });
  };

  return Review;
};
