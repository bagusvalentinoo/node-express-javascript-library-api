const RegisterResource = require('../resources/register.resource')
const response = require('../../../../utils/response.util')
const RegisterService = require('../services/register.service')
const { sequelize } = require('../../../../models')

const store = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const userCreated = await RegisterService.createNewUser(req, t)
    await t.commit()
    const user = await RegisterService.findUserById(userCreated.id)

    return response.success(
      res,
      201,
      'User Successfully Registered',
      new RegisterResource(user),
      'user'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = { store }