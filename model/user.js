module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'user',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'user_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    },
  )
}
