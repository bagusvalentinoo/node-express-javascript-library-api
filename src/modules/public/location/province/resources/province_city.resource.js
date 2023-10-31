class ProvinceCityResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.latitude = data.latitude
    this.longitude = data.longitude
  }

  static collection(dataResource) {
    return dataResource.map((data) => new ProvinceCityResource(data))
  }
}

module.exports = ProvinceCityResource