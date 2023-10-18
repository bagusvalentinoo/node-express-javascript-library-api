const response = require('../../../../utils/response.util')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { Op, User } = require('../../../../models')
require('dotenv').config()

const checkLoginCredentials = async (req) => {
  const user = await User.findOne({
    where: {
      [Op.or]: [
        { username: req.body.username },
        { email: req.body.username }
      ]
    }
  })

  if (!user)
    response.throwNewError(400, 'Oops! Username or Email and Password didn\'t match')
  if (!bcrypt.compareSync(req.body.password, user.password))
    response.throwNewError(400, 'Oops! Username or Email and Password didn\'t match')

  return user
}

const generateAccessToken = async (user) => {
  return 'Bearer ' + jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const updateLastLogin = async (user) => {
  return await user.update({ last_login: new Date(), updated_at: new Date() })
}

module.exports = {
  checkLoginCredentials,
  generateAccessToken,
  updateLastLogin
}