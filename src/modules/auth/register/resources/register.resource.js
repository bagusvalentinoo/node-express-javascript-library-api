class RegisterResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.username = data.username
    this.email = data.email
    this.gender = data.Member.gender || null
    this.address = data.Member.address || null
    this.birth_place = data.Member.birth_place || null
    this.birth_date = data.Member.birth_date || null
    this.avatar_url = data.Member.avatar_url || null
    this.province = data.Member.Province ? data.Member.Province.name : null
    this.city = data.Member.City ? data.Member.City.name : null
    this.roles = data.Roles ? data.Roles.map(role => role.name) : []
  }
}

module.exports = RegisterResource