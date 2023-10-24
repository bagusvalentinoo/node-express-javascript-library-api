const { User } = require('../../models/index')
const bcrypt = require('bcrypt')

exports.addUsersAndAssignTheirRolesForStartingSeeder = async () => {
  const admin1 = await User.create({
    name: 'Admin 1',
    username: 'admin_1',
    email: 'bagusvaalentino@gmail.com',
    password: bcrypt.hashSync('qwerty12345', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await admin1.assignRole('Admin')

  const officer1 = await User.create({
    name: 'Darina Sidis',
    username: 'darina_sidis',
    email: 'darinasidis@gmail.com',
    password: bcrypt.hashSync('qwerty12345', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await officer1.assignRole('Officer')

  const officer2 = await User.create({
    name: 'Laura Kiemeney',
    username: 'laura_kiemeney',
    email: 'laurakiemeney17@gmail.com',
    password: bcrypt.hashSync('qwerty12345', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await officer2.assignRole('Officer')
}