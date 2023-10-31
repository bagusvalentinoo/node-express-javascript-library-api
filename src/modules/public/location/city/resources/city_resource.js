class CityResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.latitude = data.latitude
    this.longitude = data.longitude
    this.province = data.Province ? data.Province.name : null
  }

  static collection(dataResource) {
    return dataResource.map((data) => new CityResource(data))
  }
}

module.exports = CityResource