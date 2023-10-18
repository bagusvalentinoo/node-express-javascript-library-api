const response = require('../../../../utils/response.util')
const LoginService = require('../services/login.service')

const login = async (req, res) => {
  try {
    const user = await LoginService.checkLoginCredentials(req)
    const accessToken = await LoginService.generateAccessToken(user)
    await LoginService.updateLastLogin(user)

    return response.success(
      res,
      200,
      'Login Successfully',
      accessToken,
      'access_token'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = { login }