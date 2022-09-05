module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user_biodata',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      age: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'user_biodata',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'user_biodata_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
}
