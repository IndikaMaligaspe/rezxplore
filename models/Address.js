// Address model
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "Address",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      postal_code: { type: DataTypes.STRING },
      city: { type: DataTypes.STRING },
      country: { type: DataTypes.STRING },
      geo_code: { type: DataTypes.JSON },
    },
    {
      underscored: true,
    }
  );
  Address.associate = (models) => {
    Address.hasMany(models.Product, {
      foreignKey: "address",
      sourceKey: "id",
      as: "products",
    });
  };

  return Address;
};
