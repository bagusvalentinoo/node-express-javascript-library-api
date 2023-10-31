const response = require('../../../../utils/response.util')
const ProfileResource = require('../resources/profile.resource')
const ProfileService = require('../services/profile.service')
const { sequelize } = require('../../../../models/index')

const update = async (req, res) => {
  const t = await sequelize.transaction()
  try {
    const findUserMemberProfile = await ProfileService.findMemberProfileById(req.user_id)
    const userMemberProfileUpdated = await ProfileService.updateMemberProfile(findUserMemberProfile, req, t)
    await t.commit()
    const userMemberProfile = await ProfileService.findMemberProfileById(userMemberProfileUpdated.user_id)

    return response.success(
      res,
      200,
      'Data Successfully Updated',
      new ProfileResource(userMemberProfile),
      'user_profile'
    )
  } catch (error) {
    if (t) await t.rollback()
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = { update }