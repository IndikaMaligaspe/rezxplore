// CancellationPolicy model
module.exports = (sequelize, DataTypes) => {
  const CancellationPolicy = sequelize.define(
    "CancellationPolicy",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      policy_type: { type: DataTypes.STRING },
      policy_from: { type: DataTypes.STRING },
      policy_to: { type: DataTypes.STRING },
      policy_value: { type: DataTypes.FLOAT },
      cancellation_note: { type: DataTypes.STRING },
      cancellation_fee: { type: DataTypes.FLOAT },
      cancellation_status: { type: DataTypes.STRING },
    },
    {
      underscored: true,
    }
  );
  CancellationPolicy.associate = (models) => {
    CancellationPolicy.hasMany(models.Product, {
      foreignKey: "cancellation_policy_id",
      sourceKey: "id",
    });
  };

  return CancellationPolicy;
};
