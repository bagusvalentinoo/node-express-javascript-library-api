const { Role } = require('../../models/index')

exports.addRolesForStartingSeeder = async () => {
  await Role.bulkCreate([
    {
      name: 'Admin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Officer',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      name: 'Member',
      created_at: new Date(),
      updated_at: new Date()
    }
  ])
}