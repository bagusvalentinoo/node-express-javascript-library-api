const response = require('../../../../../utils/response.util')
const { orderBy } = require('../../../../../utils/query.util')
const { Sequelize, Op, Province, City } = require('../../../../../models/index')

const getProvinces = async (req) => {
  const { limit } = req.query
  const sortBy = orderBy(req.query)

  const responsePayloadProvince = {
    order: sortBy,
    attributes: [
      'id',
      'name',
      'latitude',
      'longitude',
      [Sequelize.literal(`CAST((SELECT COUNT(*) FROM "location_cities" AS "City" WHERE "City"."province_id" = "Province"."id") AS INTEGER)`), 'city_count']
    ]
  }

  if (limit) responsePayloadProvince.limit = parseInt(limit)

  return await Province.findAll(responsePayloadProvince)
}

const findProvinceById = async (id) => {
  const province = await Province.findByPk(id, {
    attributes: [
      'id',
      'name',
      'latitude',
      'longitude',
      [Sequelize.literal(`CAST((SELECT COUNT(*) FROM "location_cities" AS "City" WHERE "City"."province_id" = "Province"."id") AS INTEGER)`), 'city_count']
    ],
    include: {
      model: City,
      attributes: ['id', 'name', 'latitude', 'longitude']
    }
  })

  return province ? province : response.throwNewError(400, 'Oops! Province not found')
}

module.exports = {
  getProvinces,
  findProvinceById
}