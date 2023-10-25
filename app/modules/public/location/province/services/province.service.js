const response = require('../../../../../utils/response.util')
const { Sequelize, Op, Province, City } = require('../../../../../models/index')

const getProvinces = async (req) => {
  return await Province.findAll({
    order: [['name', 'ASC']],
    attributes: [
      'id',
      'name',
      'latitude',
      'longitude',
      [Sequelize.literal(`CAST((SELECT COUNT(*) FROM "location_cities" AS "City" WHERE "City"."province_id" = "Province"."id") AS INTEGER)`), 'city_count']
    ]
  })
}

const findProvinceById = async (id) => {
  const attribute = [
    'id',
    'name',
    'latitude',
    'longitude',
    [Sequelize.literal(`CAST((SELECT COUNT(*) FROM "location_cities" AS "City" WHERE "City"."province_id" = "Province"."id") AS INTEGER)`), 'city_count']
  ]

  const province = await Province.findByPk(id, {
    attributes: attribute,
    include: {
      model: City,
      attributes: ['id', 'name', 'latitude', 'longitude']
    }
  })

  if (!province) response.throwNewError(400, 'Oops! Province not found')

  const otherProvinces = await Province.findAll({
    order: [['name', 'ASC']],
    attributes: attribute,
    where: {
      id: {
        [Op.ne]: province.id
      }
    }
  })

  return { province, otherProvinces }
}

module.exports = {
  getProvinces,
  findProvinceById
}