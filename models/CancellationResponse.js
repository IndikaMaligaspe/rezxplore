// CancellationResponse model
module.exports = (sequelize, DataTypes) => {
  const CancellationResponse = sequelize.define(
    "CancellationResponse",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      status: { type: DataTypes.STRING },
      refunded_amount: { type: DataTypes.FLOAT },
    },
    {
      underscored: true,
    }
  );
  return CancellationResponse;
};
