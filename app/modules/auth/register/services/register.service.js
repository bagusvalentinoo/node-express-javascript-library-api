const response = require('../../../../utils/response.util')
const bcrypt = require('bcrypt')
const { User, Role, UserProfile, Province, City } = require('../../../../models')

const createNewUser = async (req, t) => {
  const { name, username, email, password } = req.body

  const newUser = await User.create({
    name: name,
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 10),
    created_at: new Date(),
    updated_at: new Date()
  }, { transaction: t })
  await newUser.createUserProfile({
    created_at: new Date(),
    updated_at: new Date()
  }, { transaction: t })
  await newUser.assignRole('Member', t)

  return newUser
}

const findUserById = async (id) => {
  const user = await User.findByPk(id, {
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

  return user ? user : response.throwNewError(400, 'Oops! User not found')
}

module.exports = {
  createNewUser,
  findUserById
}