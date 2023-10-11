class RegisterResource {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.username = data.username
    this.email = data.email
    this.gender = data.UserProfile.gender || null
    this.address = data.UserProfile.address || null
    this.birth_place = data.UserProfile.birth_place || null
    this.birth_date = data.UserProfile.birth_date || null
    this.avatar = data.UserProfile.avatar || null
    this.roles = data.Roles ? data.Roles.map(role => role.name) : []
  }
}

module.exports = RegisterResource