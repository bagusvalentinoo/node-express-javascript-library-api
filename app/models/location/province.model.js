const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class Province extends Model {
    static associate(models) {
      // HasMany Relationships
      this.hasMany(models.City, {
        foreignKey: 'province_id'
      })

      this.hasMany(models.UserProfile, {
        foreignKey: 'province_id'
      })
    }
  }

  Province.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Oops! Province name already exists'
        },
        validate: {
          notNull: {
            msg: 'Oops! Province name cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Province name cannot be empty'
          }
        }
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Latitude cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Latitude cannot be empty'
          }
        }
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Oops! Longitude cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! Longitude cannot be empty'
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
      modelName: 'Province',
      tableName: 'location_provinces',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return Province
}