module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: '120234',
  PORT: 5432,
  DB: 'sequelize',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
