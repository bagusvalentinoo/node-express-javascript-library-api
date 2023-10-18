const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  class City extends Model {
    static associate(models) {
      // BelongsTo Relationships
      this.belongsTo(models.Province, {
        foreignKey: 'province_id'
      })

      this.hasMany(models.UserProfile, {
        foreignKey: 'city_id'
      })
    }
  }

  City.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      province_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'location_provinces',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: {
          args: true,
          msg: 'Oops! City name already exists'
        },
        validate: {
          notNull: {
            msg: 'Oops! City name cannot be empty'
          },
          notEmpty: {
            msg: 'Oops! City name cannot be empty'
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
      modelName: 'City',
      tableName: 'location_cities',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  )

  return City
}