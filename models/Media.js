// Media model
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "Media",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      url: { type: DataTypes.STRING },
      caption: { type: DataTypes.STRING },
      type: { type: DataTypes.STRING },
      featured: { type: DataTypes.BOOLEAN },
      product_id: {
        type: DataTypes.STRING,
        allowNull: true, // or false if required
      },
    },
    {
      underscored: true,
      tableName: "medias",
    }
  );
  Media.associate = (models) => {
    Media.belongsTo(models.Product, {
      foreignKey: "product_id",
      sourceKey: "product_id",
    });
  };

  return Media;
};
