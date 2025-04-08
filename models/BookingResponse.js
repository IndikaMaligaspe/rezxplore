// BookingResponse model
module.exports = (sequelize, DataTypes) => {
  const BookingResponse = sequelize.define(
    "BookingResponse",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      status: { type: DataTypes.STRING },
      confirmation_code: { type: DataTypes.STRING },
    },
    {
      underscored: true,
    }
  );
  return BookingResponse;
};
