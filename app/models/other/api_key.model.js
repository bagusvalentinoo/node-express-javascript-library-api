const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class ApiKey extends Model { }

  ApiKey.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      api_key: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: {
          msg: 'API Key already exists'
        },
        validate: {
          notNull: {
            msg: 'API Key is required'
          },
          notEmpty: {
            msg: 'API Key is required'
          }
        }
      },
      status: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Status is required'
          },
          notEmpty: {
            msg: 'Status is required'
          },
          isIn: {
            args: [['ACTIVE', 'INACTIVE']],
            msg: 'Status must be either ACTIVE or INACTIVE'
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
      modelName: 'ApiKey',
      tableName: 'api_keys',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return ApiKey
}