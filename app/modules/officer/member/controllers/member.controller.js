const response = require('../../../../utils/response.util')
const MemberResource = require('../resources/member.resource')
const MemberService = require('../services/member.service')
const { sequelize } = require('../../../../models/index')

const index = async (req, res) => {
  try {
    const members = await MemberService.getMembers(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      members
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const store = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const memberCreated = await MemberService.createMember(req, t)
    await t.commit()
    const member = await MemberService.findMemberById(memberCreated.id)

    return response.success(
      res,
      201,
      'Data Successfully Created',
      new MemberResource(member),
      'member'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const member = await MemberService.findMemberById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      new MemberResource(member),
      'member'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const destroy = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    await MemberService.deleteMembers(req.body.ids, t)
    await t.commit()

    return response.success(
      res,
      200,
      'Data Successfully Deleted'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  index,
  store,
  show,
  destroy
}