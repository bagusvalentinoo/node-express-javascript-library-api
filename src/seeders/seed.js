const { addRolesForStartingSeeder } = require('./user/role.seeder')
const { addUsersAndAssignTheirRolesForStartingSeeder } = require('./user/user.seeder')
const { addProvincesForStartingSeeder } = require('./location/province.seeder')
const { addCitiesForStartingSeeder } = require('./location/city.seeder')
const { addBookshelvesForStartingSeeder } = require('./product/bookshelf.seeder')


exports.seed = async () => {
  await addRolesForStartingSeeder()
  await addUsersAndAssignTheirRolesForStartingSeeder()
  await addProvincesForStartingSeeder()
  await addCitiesForStartingSeeder()
  await addBookshelvesForStartingSeeder()
}