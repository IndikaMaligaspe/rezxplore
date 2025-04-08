module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING, unique: true },
      api_key: { type: DataTypes.STRING, unique: true },
    },
    {
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Role);
    User.hasMany(models.BookingRequest);
  };

  return User;
};
