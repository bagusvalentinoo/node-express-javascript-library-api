const response = require('../../../../utils/response.util')
const { User, Member, Province, City } = require('../../../../models/index')

const findMemberProfileById = async (id) => {
  const memberProfile = await Member.findOne({
    where: { user_id: id },
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'username']
      },
      {
        model: Province,
        attributes: ['id', 'name']
      },
      {
        model: City,
        attributes: ['id', 'name']
      }
    ]
  })

  return memberProfile ? memberProfile : response.throwNewError(400, 'Oops! Something went wrong')
}

const updateMemberProfile = async (memberProfile, req, t) => {
  const {
    name,
    username,
    gender,
    address,
    birth_place,
    birth_date,
    province,
    city
  } = req.body
  const { file } = req

  const memberProfileUpdated = await memberProfile.update({
    gender: gender || memberProfile.gender,
    address: address || memberProfile.address,
    birth_place: birth_place || memberProfile.birth_place,
    birth_date: birth_date || memberProfile.birth_date,
    updated_at: new Date()
  }, { transaction: t })

  await User.update({
    name: name || memberProfile.User.name,
    username: username || memberProfile.User.username,
    updated_at: new Date()
  }, { where: { id: memberProfile.user_id }, transaction: t })

  if (file) {
    memberProfileUpdated.avatar_url = file.publicUrl
    await memberProfile.save({ transaction: t })
  }

  if (province) {
    const isProvinceExist = await Province.findByPk(province)
    if (!isProvinceExist) response.throwNewError(400, 'Oops! Province not found')
    await memberProfileUpdated.setProvince(province, { transaction: t })
  }
  if (city) {
    const isCityExist = await City.findByPk(city)
    if (!isCityExist) response.throwNewError(400, 'Oops! City not found')
    await memberProfileUpdated.setCity(city, { transaction: t })
  }

  return memberProfileUpdated
}

module.exports = {
  findMemberProfileById,
  updateMemberProfile
}
