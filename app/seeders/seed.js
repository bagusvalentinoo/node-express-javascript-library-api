const { addRolesForStartingSeeder } = require('./user/role.seeder')
const { addUsersAndAssignTheirRolesForStartingSeeder } = require('./user/user.seeder')

exports.seed = async () => {
  await addRolesForStartingSeeder()
  await addUsersAndAssignTheirRolesForStartingSeeder()
}