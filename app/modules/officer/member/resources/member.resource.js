const { convertToFormatDate } = require('../../../../utils/string.util')

class MemberResource {
  constructBirthPlaceAndDate() {
    if (this.birth_place && this.birth_date) return `${this.birth_place}, ${this.birth_date}`
    if (this.birth_place) return this.birth_place
    if (this.birth_date) return this.birth_date

    return null
  }

  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.username = data.username
    this.email = data.email
    this.gender = data.UserProfile ? data.UserProfile.gender : null
    this.address = data.UserProfile ? data.UserProfile.address : null
    this.birth_place = data.UserProfile ? data.UserProfile.birth_place : null
    this.birth_date = data.UserProfile ? convertToFormatDate(data.UserProfile.birth_date) : null
    this.birth_place_and_date = this.constructBirthPlaceAndDate()
    this.avatar = data.UserProfile ? data.UserProfile.avatar : null
    this.province = data.UserProfile && data.UserProfile.Province ? data.UserProfile.Province.name : null
    this.city = data.UserProfile && data.UserProfile.City ? data.UserProfile.City.name : null
    this.roles = data.Roles ? data.Roles.map(role => role.name) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new MemberResource(data))
  }
}

module.exports = MemberResource