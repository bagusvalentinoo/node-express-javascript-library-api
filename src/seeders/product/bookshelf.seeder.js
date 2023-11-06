const { User, Role, Bookshelf } = require('../../models/index')

exports.addBookshelvesForStartingSeeder = async () => {
  const userOfficer1 = await User.findOne({
    where: {
      username: 'darina_sidis'
    },
    include: {
      model: Role,
      where: {
        name: 'Officer'
      }
    }
  })

  const userOfficer2 = await User.findOne({
    where: {
      username: 'laura_kiemeney'
    },
    include: {
      model: Role,
      where: {
        name: 'Officer'
      }
    }
  })

  await Bookshelf.bulkCreate([
    {
      name: 'Bookshelf 1',
      code: 'A101',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 2',
      code: 'A102',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 3',
      code: 'A103',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 4',
      code: 'B101',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 5',
      code: 'B102',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 6',
      code: 'B103',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 7',
      code: 'B104',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 8',
      code: 'B105',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer1.id,
      updated_by: userOfficer1.id
    },
    {
      name: 'Bookshelf 9',
      code: 'C101',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 10',
      code: 'C102',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 11',
      code: 'C103',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 12',
      code: 'C104',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 13',
      code: 'C105',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 14',
      code: 'D101',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    },
    {
      name: 'Bookshelf 15',
      code: 'D102',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date(),
      created_by: userOfficer2.id,
      updated_by: userOfficer2.id
    }
  ])
}