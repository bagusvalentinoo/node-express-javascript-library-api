const response = require('../../../../../utils/response.util')
const CityResource = require('../resources/city_resource')
const CityService = require('../services/city.service')

const index = async (req, res) => {
  try {
    const cities = await CityService.getCities(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      CityResource.collection(cities)
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const city = await CityService.findCityById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      new CityResource(city),
      'city'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  index,
  show
}