// PaginationMeta model
module.exports = (sequelize, DataTypes) => {
  const PaginationMeta = sequelize.define(
    "PaginationMeta",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      page: { type: DataTypes.INTEGER },
      limit: { type: DataTypes.INTEGER },
      total_pages: { type: DataTypes.INTEGER },
      total_records: { type: DataTypes.INTEGER },
      total_activities: { type: DataTypes.INTEGER },
    },
    {
      underscored: true,
    }
  );
  return PaginationMeta;
};
