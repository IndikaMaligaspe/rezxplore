module.exports = (sequelize, DataTypes) => {
  const BookingRequest = sequelize.define(
    "BookingRequest",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      product_id: { type: DataTypes.STRING },
      date: { type: DataTypes.STRING },
      timeslot: { type: DataTypes.STRING },
      guests: { type: DataTypes.INTEGER },
      customer_info: { type: DataTypes.JSON },
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );

  BookingRequest.associate = (models) => {
    BookingRequest.belongsTo(models.User);
  };

  return BookingRequest;
};
