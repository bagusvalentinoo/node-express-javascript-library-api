const MemberResource = require('../resources/member.resource')
const response = require('../../../../utils/response.util')
const bcrypt = require('bcrypt')
const WelcomeEmailTemplate = require('../../../../email/templates/welcome.template')
const ThankyouEmailTemplate = require('../../../../email/templates/thank_you.template')
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
  Member,
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
    distinct: true,
    subQuery: false,
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'username', 'email'],
        include: {
          model: Role,
          through: { attributes: [] },
          attributes: ['id', 'name'],
          where: { name: 'Member' }
        }
      },
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

  if (search) {
    responsePayloadMember.where = {
      [Op.or]: [
        {
          '$User.name$': {
            [Op.like]: `%${search}%`
          }
        },
        {
          '$User.username$': {
            [Op.like]: `%${search}%`
          }
        },
        {
          '$User.email$': {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('gender'), 'varchar'),
          { [Op.eq]: search }
        ),
        {
          address: {
            [Op.like]: `%${search}%`
          }
        },
        {
          birth_place: {
            [Op.like]: `%${search}%`
          }
        },
        Sequelize.where(
          Sequelize.cast(Sequelize.col('birth_date'), 'varchar'),
          { [Op.like]: `%${convertToDefaultFormatDate(search)}%` }
        ),
        Sequelize.where(
          Sequelize.cast(Sequelize.col('status'), 'varchar'),
          { [Op.eq]: search }
        ),
        {
          '$Province.name$': {
            [Op.iLike]: `%${search}%`
          }
        },
        {
          '$City.name$': {
            [Op.iLike]: `%${search}%`
          }
        },
        {
          '$User.Roles.name$': {
            [Op.iLike]: `%${search}%`
          }
        }
      ]
    }
  }

  const members = await Member.findAndCountAll(responsePayloadMember)

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
  await newMember.createMember({
    status: 'ACTIVE',
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
  const member = await Member.findByPk(id, {
    include: [
      {
        model: User,
        attributes: ['id', 'name', 'username', 'email'],
        include: {
          model: Role,
          through: { attributes: [] },
          attributes: ['id', 'name'],
          where: { name: 'Member' }
        }
      },
      {
        model: Province,
        attributes: ['id', 'name']
      },
      {
        model: City,
        attributes: ['id', 'name']
      }
    ]
  })

  return member ? member : response.throwNewError(400, 'Oops! Member not found')
}

const updateStatusMember = async (req, member, t) => {
  return await member.update({
    status: req.body.status || member.status,
    updated_at: new Date()
  }, { transaction: t })
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

    await Member.destroy({
      where: {
        user_id: member.id
      }
    }, { transaction: t })

    await member.destroy({ transaction: t })

    await emailQueue.add({
      to: member.email,
      subject: 'Thank You for Using Our Platform',
      html: ThankyouEmailTemplate(member.name)
    })
  }

  return members
}

module.exports = {
  getMembers,
  createMember,
  findMemberById,
  updateStatusMember,
  deleteMembers
}