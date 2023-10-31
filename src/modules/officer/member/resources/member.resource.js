const { convertToFormatDate, convertTimeStampToFormatDate } = require('../../../../utils/string.util')

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
    this.gender = data.Member ? data.Member.gender : null
    this.address = data.Member ? data.Member.address : null
    this.birth_place = data.Member ? data.Member.birth_place : null
    this.birth_date = data.Member ? convertToFormatDate(data.Member.birth_date) : null
    this.birth_place_and_date = this.constructBirthPlaceAndDate()
    this.join_date = convertTimeStampToFormatDate(data.created_at) || null
    this.status = data.Member ? data.Member.status : null
    this.avatar_url = data.Member ? data.Member.avatar_url : null
    this.province = data.Member && data.Member.Province ? data.Member.Province.name : null
    this.city = data.Member && data.Member.City ? data.Member.City.name : null
    this.roles = data.Roles ? data.Roles.map(role => role.name) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new MemberResource(data))
  }
}

module.exports = MemberResource