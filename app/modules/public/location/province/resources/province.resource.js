const ProvinceCityResource = require('./province_city.resource')

class ProvinceResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.latitude = data.latitude
    this.longitude = data.longitude
    this.city_count = parseInt(data.dataValues.city_count)
    this.cities = data.Cities ? ProvinceCityResource.collection(data.Cities) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new ProvinceResource(data))
  }
}

module.exports = ProvinceResource