const response = require('../../../../../utils/response.util')
const { orderBy } = require('../../../../../utils/query.util')
const { Op, City, Province } = require('../../../../../models/index')

const getCities = async (req) => {
  const { limit } = req.query
  const sortBy = orderBy(req.query)

  const responsePayloadCity = {
    order: sortBy,
    attributes: ['id', 'name', 'latitude', 'longitude'],
    include: {
      model: Province,
      attributes: ['id', 'name']
    }
  }

  if (limit) responsePayloadCity.limit = parseInt(limit)

  return await City.findAll(responsePayloadCity)
}

const findCityById = async (id) => {
  const city = await City.findByPk(id, {
    attributes: ['id', 'name', 'latitude', 'longitude'],
    include: {
      model: Province,
      attributes: ['id', 'name']
    }
  })

  return city ? city : response.throwNewError(400, 'Oops! City not found')
}

module.exports = {
  getCities,
  findCityById
}