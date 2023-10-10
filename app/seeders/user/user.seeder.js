const { User } = require('../../models/index')
const bcrypt = require('bcrypt')

exports.addUsersAndAssignTheirRolesForStartingSeeder = async () => {
  const admin1 = await User.create({
    name: 'Admin 1',
    username: 'admin_1',
    email: 'admin_1@example.com',
    password: bcrypt.hashSync('admin_1', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await admin1.assignRole('Admin')

  const officer1 = await User.create({
    name: 'Officer 1',
    username: 'officer_1',
    email: 'officer_1@example.com',
    password: bcrypt.hashSync('officer_1', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await officer1.assignRole('Officer')

  const officer2 = await User.create({
    name: 'Officer 2',
    username: 'officer_2',
    email: 'officer_2@example.com',
    password: bcrypt.hashSync('officer_2', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await officer2.assignRole('Officer')

  const member1 = await User.create({
    name: 'John Doe',
    username: 'john_doe',
    email: 'john_doe@example.com',
    password: bcrypt.hashSync('john_doe', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await member1.assignRole('Member')

  const member2 = await User.create({
    name: 'Mark Wills',
    username: 'mark_wills',
    email: 'mark_wills@example.com',
    password: bcrypt.hashSync('mark_wills', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await member2.assignRole('Member')

  const member3 = await User.create({
    name: 'Jessica Alba',
    username: 'jessica_alba',
    email: 'jessica_alba@example.com',
    password: bcrypt.hashSync('jessica_alba', 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await member3.assignRole('Member')
}