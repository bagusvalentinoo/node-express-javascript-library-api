const response = require('../../../../utils/response.util')
const { User, UserProfile, Province, City } = require('../../../../models/index')

const findUserProfileById = async (id) => {
  const userProfile = await UserProfile.findOne({
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

  return userProfile ? userProfile : response.throwNewError(400, 'Oops! Something went wrong')
}

const updateUserProfile = async (userProfile, req, t) => {
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

  const userProfileUpdated = await userProfile.update({
    gender: gender || userProfile.gender,
    address: address || userProfile.address,
    birth_place: birth_place || userProfile.birth_place,
    birth_date: birth_date || userProfile.birth_date,
    updated_at: new Date()
  }, { transaction: t })

  await User.update({
    name: name || userProfile.User.name,
    username: username || userProfile.User.username,
    updated_at: new Date()
  }, { where: { id: userProfile.user_id }, transaction: t })

  if (file) {
    userProfileUpdated.avatar_url = file.publicUrl
    await userProfile.save({ transaction: t })
  }

  if (province) {
    const isProvinceExist = await Province.findByPk(province)
    if (!isProvinceExist) response.throwNewError(400, 'Oops! Province not found')
    await userProfileUpdated.setProvince(province, { transaction: t })
  }
  if (city) {
    const isCityExist = await City.findByPk(city)
    if (!isCityExist) response.throwNewError(400, 'Oops! City not found')
    await userProfileUpdated.setCity(city, { transaction: t })
  }

  return userProfileUpdated
}

module.exports = {
  findUserProfileById,
  updateUserProfile
}
