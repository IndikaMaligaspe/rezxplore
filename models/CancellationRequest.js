// CancellationRequest model
module.exports = (sequelize, DataTypes) => {
  const CancellationRequest = sequelize.define(
    "CancellationRequest",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      booking_id: { type: DataTypes.STRING },
      reason: { type: DataTypes.STRING },
    },
    {
      underscored: true,
    }
  );
  return CancellationRequest;
};
