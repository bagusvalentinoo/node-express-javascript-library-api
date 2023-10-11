const bcrypt = require('bcrypt')
const { User, Role, UserProfile } = require('../../../models/index')

const createNewUser = async (req, t) => {
  const newUser = await User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    created_at: new Date(),
    updated_at: new Date()
  })
  await newUser.assignRole('Member')
  await newUser.createUserProfile({}, { transaction: t })

  await t.commit()

  const user = await User.findByPk(newUser.id, {
    include: [
      {
        model: Role,
        attributes: ['name']
      },
      {
        model: UserProfile,
        attributes: {
          exclude: ['created_at', 'updated_at']
        }
      }
    ]
  })

  return user
}

module.exports = { createNewUser }