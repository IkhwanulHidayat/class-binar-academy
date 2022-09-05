const db = require('../model/index')
const bcrypt = require('bcrypt')
class User {
  async create(req, res) {
    const body = req.body
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(body.password, salt)
    const users = await db.database.user.create({
      email: body.email,
      password: hash,
      name: body.name,
    })
    res.json({ message: 'get success', data: users })
  }
  async findAll(req, res) {
    const users = await db.database.user.findAll()
    res.json({ message: 'get success', data: users })
  }
}
module.exports = new User()
