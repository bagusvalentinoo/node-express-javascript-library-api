const response = require('../../../../../utils/response.util')
const ProvinceResource = require('../resources/province.resource')
const ProvinceService = require('../services/province.service')

const index = async (req, res) => {
  try {
    const provinces = await ProvinceService.getProvinces(req)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      provinces,
      'provinces'
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

const show = async (req, res) => {
  try {
    const { province, otherProvinces } = await ProvinceService.findProvinceById(req.params.param)

    return response.success(
      res,
      200,
      'Data Successfully Loaded',
      {
        province: new ProvinceResource(province),
        other_provinces: otherProvinces
      }
    )
  } catch (error) {
    return response.failed(res, error.status_code ?? 500, error)
  }
}

module.exports = {
  index,
  show
}