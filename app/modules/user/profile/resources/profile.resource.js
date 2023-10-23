const { convertToFormatDate } = require('../../../../utils/string.util')

class ProfileResource {
  constructBirthPlaceAndDate() {
    if (this.birth_place && this.birth_date) return `${this.birth_place}, ${this.birth_date}`
    if (this.birth_place) return this.birth_place
    if (this.birth_date) return this.birth_date

    return null
  }

  constructor(data) {
    this.id = data.id
    this.user_id = data.user_id
    this.name = data.User ? data.User.name : null
    this.username = data.User ? data.User.username : null
    this.gender = data.gender
    this.address = data.address
    this.birth_place = data.birth_place
    this.birth_date = convertToFormatDate(data.birth_date)
    this.birth_place_and_date = this.constructBirthPlaceAndDate()
    this.avatar_url = data.avatar_url
    this.province = data.Province ? data.Province.name : null
    this.city = data.City ? data.City.name : null
  }

  static collection(dataResource) {
    return dataResource.map((data) => new ProfileResource(data))
  }
}

module.exports = ProfileResource