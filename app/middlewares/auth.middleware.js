const response = require('../utils/response.util')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.get('Authorization')

    if (!token.split(' ')[0] !== 'Bearer') response.throwNewError(401, 'Oops! Token is invalid')
    if (!token.split(' ')[1]) response.throwNewError(401, 'Oops! Token is invalid')

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
      if (err) response.throwNewError(403, 'Oops! Token is invalid')

      req.user_id = decoded.id
    })

    next()
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = authenticateToken