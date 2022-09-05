var DataTypes = require('sequelize').DataTypes
var _user = require('./user')
var _user_biodata = require('./user_biodata')
var _user_history = require('./user_history')

function initModels(sequelize) {
  var user = _user(sequelize, DataTypes)
  var user_biodata = _user_biodata(sequelize, DataTypes)
  var user_history = _user_history(sequelize, DataTypes)

  user_biodata.belongsTo(user, {
    as: 'user',
    foreignKey: 'user_id',
  })
  user.hasOne(user_biodata, {
    as: 'user_biodata',
    foreignKey: 'user_id',
  })
  user_history.belongsTo(user, {
    as: 'user',
    foreignKey: 'user_id',
  })
  user.hasOne(user_history, {
    as: 'user_histories',
    foreignKey: 'user_id',
  })

  user_history.hasOne(user_biodata, {
    as: 'user_biodata',
    foreignKey: 'user_id',
    sourceKey: 'user_id',
  })
  user_biodata.hasOne(user_history, {
    as: 'user_histories',
    foreignKey: 'user_id',
  })

  return {
    user,
    user_biodata,
    user_history,
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
