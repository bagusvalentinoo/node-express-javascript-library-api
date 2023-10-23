const { Model, DataTypes } = require('sequelize')
const { throwNewError } = require('../../utils/response.util')
const { emailQueue } = require('../../email/queue/email.queue')
const ThankyouEmailTemplate = require('../../email/templates/thank_you.template')

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // HasOne Relationship
      this.hasOne(models.UserProfile, {
        foreignKey: 'user_id'
      })

      // HasMany Relationships
      this.hasMany(models.Genre, {
        foreignKey: 'created_by',
        as: 'createdGenres'
      })

      this.hasMany(models.Genre, {
        foreignKey: 'updated_by',
        as: 'updatedGenres'
      })

      this.hasMany(models.Book, {
        foreignKey: 'created_by',
        as: 'createdBooks'
      })

      this.hasMany(models.Book, {
        foreignKey: 'updated_by',
        as: 'updatedBooks'
      })

      // BelongsToMany Relationship
      this.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: 'user_id',
        otherKey: 'role_id'
      })
    }

    async assignRole(name, t = null) {
      const roleNames = Array.isArray(name) ? name : [name]

      const roles = await sequelize.models.Role.findAll({
        where: {
          name: roleNames
        }
      })

      if (!roles.length > 0) throwNewError(400, 'Oops! Role not found')

      await this.setRoles(roles, { transaction: t })
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Name cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Name cannot be empty'
          }
        }
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          msg: 'Oops! Username already exists'
        },
        validate: {
          notNull: {
            msg: 'Oops! Username cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Username cannot be empty'
          },
          len: {
            args: [6, 50],
            msg: 'Oops! Username length between 6 or 50 characters'
          }
        }
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          msg: 'Oops! Email already exists'
        },
        validate: {
          notNull: {
            msg: 'Oops! Email cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Email cannot be empty'
          },
          isEmail: {
            msg: 'Oops! Email is not valid'
          }
        }
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Password cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Password cannot be empty'
          },
          len: {
            args: [6, 100],
            msg: 'Oops! Password length between 6 or 100 characters'
          }
        }
      },
      last_login: {
        type: DataTypes.DATE,
        allowNull: true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
      }
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  User.afterDestroy(async (user, options) => {
    await emailQueue.add({
      to: user.email,
      subject: 'Thank You for Using Our Platform',
      html: ThankyouEmailTemplate(user.name)
    })
  })

  return User
}