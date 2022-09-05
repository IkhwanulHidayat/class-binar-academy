module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user_history',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      score: {
        type: DataTypes.INT(30),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'user_history',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'user_history_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
}
