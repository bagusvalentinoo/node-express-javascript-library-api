const RegisterResource = require('../resources/register.resource')
const response = require('../../../utils/response.util')
const RegisterService = require('../services/register.service')
const { sequelize } = require('../../../models/index')

const store = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const user = await RegisterService.createNewUser(req, t)

    return response.success(
      res,
      201,
      'Data Successfully Created',
      new RegisterResource(user),
      'user'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = { store }