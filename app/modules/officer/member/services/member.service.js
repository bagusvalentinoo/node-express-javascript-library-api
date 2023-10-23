const MemberResource = require('../resources/member.resource')
const response = require('../../../../utils/response.util')
const bcrypt = require('bcrypt')
const WelcomeEmailTemplate = require('../../../../email/templates/welcome.template')
const {
  convertToDefaultFormatDate,
  generateUsernameFromName,
  generateRandomPassword
} = require('../../../../utils/string.util')
const { emailQueue } = require('../../../../email/queue/email.queue')
const { orderBy } = require('../../../../utils/query.util')
const {
  Sequelize,
  Op,
  User,
  Role,
  UserRole,
  UserProfile,
  Province,
  City
} = require('../../../../models/index')

const getMembers = async (req) => {
  const query = req.query
  const sortBy = orderBy(query)
  const { search } = query
  const { limit, offset } = response.pagination(query.page, query.limit)

  const responsePayloadMember = {
    limit: limit,
    offset: offset,
    order: sortBy,
    attributes: ['id', 'name', 'username', 'email', 'created_at', 'updated_at'],
    distinct: true,
    subQuery: false,
    include: [
      {
        model: Role,
        through: { attributes: [] },
        attributes: ['id', 'name'],
        where: { name: 'Member' }
      },
      {
        model: UserProfile,
        attributes: ['id', 'gender', 'address', 'birth_place', 'birth_date', 'avatar'],
        include: [
          {
            model: Province,
            attributes: ['id', 'name']
          },
          {
            model: City,
            attributes: ['id', 'name']
          }
        ]
      }
    ]
  }

  if (search) {
    responsePayloadMember.where = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`
          }
        },
        {
          username: {
            [Op.like]: `%${search}%`
          }
        },
        {
          email: {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('UserProfile.gender'), 'varchar'),
          { [Op.like]: `%${search}%` }
        ),
        {
          '$UserProfile.address$': {
            [Op.like]: `%${search}%`
          }
        },
        {
          '$UserProfile.birth_place$': {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('UserProfile.birth_date'), 'varchar'),
          { [Op.like]: `%${convertToDefaultFormatDate(search)}%` }
        ),
        {
          '$UserProfile.Province.name$': {
            [Op.iLike]: `%${search}%`
          }
        },
        {
          '$UserProfile.City.name$': {
            [Op.iLike]: `%${search}%`
          }
        },
        {
          '$Roles.name$': {
            [Op.iLike]: `%${search}%`
          }
        }
      ]
    }
  }

  const members = await User.findAndCountAll(responsePayloadMember)

  return response.paginate(
    members,
    query.page,
    limit,
    'members',
    MemberResource.collection(members.rows, 1)
  )
}

const createMember = async (req, t) => {
  const { name, email } = req.body

  let username = generateUsernameFromName(name)
  const randomPassword = generateRandomPassword(12)

  const isUsernameExist = await User.findOne({
    where: { username: username }
  })

  while (isUsernameExist) {
    username = generateUsernameFromName(name)
  }

  const newMember = await User.create({
    name: name,
    username: username,
    email: email,
    password: bcrypt.hashSync(randomPassword, 10),
    created_at: new Date(),
    updated_at: new Date()
  }, { transaction: t })
  await newMember.createUserProfile({
    created_at: new Date(),
    updated_at: new Date()
  }, { transaction: t })
  await newMember.assignRole('Member', t)

  await emailQueue.add({
    to: email,
    subject: 'Welcome to Our Platform',
    html: WelcomeEmailTemplate(email, username, randomPassword)
  })

  return newMember
}

const findMemberById = async (id) => {
  const member = await User.findByPk(id, {
    include: [
      {
        model: Role,
        through: { attributes: [] },
        attributes: ['id', 'name']
      },
      {
        model: UserProfile,
        attributes: {
          exclude: ['created_at', 'updated_at']
        },
        include: [
          {
            model: Province,
            attributes: ['id', 'name']
          },
          {
            model: City,
            attributes: ['id', 'name']
          }
        ]
      }
    ]
  })

  return member ? member : response.throwNewError(400, 'Oops! Member not found')
}

const deleteMembers = async (ids, t) => {
  const members = await User.findAll({
    where: {
      id: {
        [Op.in]: ids
      }
    },
    include: {
      model: Role,
      through: { attributes: [] },
      attributes: ['id', 'name'],
      where: { name: 'Member' }
    }
  })

  if (members.length === 0) response.throwNewError(400, 'Oops! Member not found')

  for (const member of members) {
    await UserRole.destroy({
      where: {
        user_id: member.id
      }
    }, { transaction: t })

    await UserProfile.destroy({
      where: {
        user_id: member.id
      }
    }, { transaction: t })
  }

  return await User.destroy({
    where: {
      id: {
        [Op.in]: ids
      }
    },
    individualHooks: true
  }, { transaction: t })
}

module.exports = {
  getMembers,
  createMember,
  findMemberById,
  deleteMembers
}