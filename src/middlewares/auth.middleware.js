const response = require('../utils/response.util')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateToken = async (req, res, next) => {
  try {
    const tokenHeader = req.get('Authorization')

    if (!tokenHeader) response.throwNewError(401, 'Oops! You are not authorized to access this resource')

    const tokenBearer = tokenHeader.split(' ')[0]
    const token = tokenHeader.split(' ')[1]

    if (tokenBearer !== 'Bearer') response.throwNewError(401, 'Oops! You are not authorized to access this resource')
    if (!token) response.throwNewError(401, 'Oops! You are not authorized to access this resource')

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) response.throwNewError(401, 'Oops! You are not authorized to access this resource')

      req.user_id = decoded.id
    })

    next()
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = authenticateToken