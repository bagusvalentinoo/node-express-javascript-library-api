const { Model, DataTypes } = require('sequelize')
const { throwNewError } = require('../../utils/response.util')

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      // HasOne Relationship
      this.hasOne(models.UserProfile, {
        foreignKey: 'user_id'
      })

      // BelongsToMany Relationship
      this.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: 'user_id',
        otherKey: 'role_id'
      })
    }

    async assignRole(name) {
      const roleNames = Array.isArray(name) ? name : [name]

      const roles = await sequelize.models.Role.findAll({
        where: {
          name: roleNames
        }
      })

      if (!roles.length > 0) throwNewError(400, 'Oops! Role not found')

      await this.setRoles(roles)
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
            msg: 'Name is required'
          },
          notEmpty: {
            msg: 'Name is required'
          }
        }
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          msg: 'Username already exists'
        },
        validate: {
          notNull: {
            msg: 'Username is required'
          },
          notEmpty: {
            msg: 'Username is required'
          },
          len: {
            args: [6, 50],
            msg: 'Username must be between 6 and 50 characters'
          }
        }
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          msg: 'Email already exists'
        },
        validate: {
          notNull: {
            msg: 'Email is required'
          },
          notEmpty: {
            msg: 'Email is required'
          },
          isEmail: {
            msg: 'Email is invalid'
          }
        }
      },
      password: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Password is required'
          },
          notEmpty: {
            msg: 'Password is required'
          },
          len: {
            args: [6, 100],
            msg: 'Password must be between 6 and 100 characters'
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

  return User
}