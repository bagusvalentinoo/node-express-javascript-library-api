const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Role extends Model {
    static associate(models) {
      // BelongsToMany Relationship
      this.belongsToMany(models.User, {
        through: models.UserRole,
        foreignKey: 'role_id',
        otherKey: 'user_id'
      })
    }
  }

  Role.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          msg: 'Oops! Role name already exist'
        },
        validate: {
          notNull: {
            msg: 'Oops! Role cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Role cannot be empty'
          },
          len: {
            args: [3, 50],
            msg: 'Oops! Role length between 3 or 50 characters'
          }
        }
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
      modelName: 'Role',
      tableName: 'roles',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Role
}